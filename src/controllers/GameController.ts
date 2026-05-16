import { MAX_ERRORS } from "../config/gameConfig";
import type { AbilityType, ActiveEffect } from "../models/Ability";
import type { RoomState } from "../models/Room";
import type { SudokuBoard } from "../models/Sudoku";
import type { AppRouter } from "../router/AppRouter";
import type { AbilityService } from "../services/AbilityService";
import type { FirebaseService } from "../services/FirebaseService";
import type { RegionService } from "../services/RegionService";
import type { RoomService } from "../services/RoomService";
import type { ScoreService } from "../services/ScoreService";
import type { StorageService } from "../services/StorageService";
import type { SudokuService } from "../services/SudokuService";
import type { TimerService } from "../services/TimerService";
import type { GameView } from "../views/GameView";

export class GameController {
  private roomCode = "";
  private room: RoomState | null = null;
  private board: SudokuBoard | null = null;
  private selectedCellIndex: number | null = null;
  private selectedNumber: number | null = null;
  private pendingAbility: AbilityType | null = null;
  private notesMode = false;
  private unsubscribe: (() => void) | null = null;
  private timerIntervalId: number | null = null;
  private readonly appliedInstantEffectIds = new Set<string>();
  private hasSyncedInitialPublicBoard = false;

  private readonly keyboardHandler = (event: KeyboardEvent): void => {
    this.handleKeyboardInput(event);
  };

  constructor(
    private readonly gameView: GameView,
    private readonly roomService: RoomService,
    private readonly firebaseService: FirebaseService,
    private readonly storageService: StorageService,
    private readonly sudokuService: SudokuService,
    private readonly scoreService: ScoreService,
    private readonly abilityService: AbilityService,
    private readonly regionService: RegionService,
    private readonly timerService: TimerService,
    private readonly router: AppRouter,
  ) {}

  init(roomCode: string): void {
    this.roomCode = roomCode;
    document.addEventListener("keydown", this.keyboardHandler);

    this.unsubscribe = this.firebaseService.subscribeToRoom(roomCode, (room) => {
      void this.handleRoomUpdate(room);
    });

    this.timerIntervalId = window.setInterval(() => {
      void this.checkFinishConditions();
      this.render();
    }, 1000);
  }

  destroy(): void {
    document.removeEventListener("keydown", this.keyboardHandler);
    this.unsubscribe?.();

    if (this.timerIntervalId !== null) {
      window.clearInterval(this.timerIntervalId);
    }
  }

  private async handleRoomUpdate(room: RoomState | null): Promise<void> {
    if (!room) {
      this.router.goHome();
      return;
    }

    if (room.status === "finished") {
      this.router.goResult(room.roomCode);
      return;
    }

    this.room = room;

    const currentPlayerId = this.storageService.getPlayerId();
    const notesAreFrozen = currentPlayerId
      ? Object.values(room.activeEffects ?? {}).some(
          (effect: ActiveEffect) =>
            effect.targetPlayerId === currentPlayerId &&
            effect.type === "freeze-notes" &&
            effect.expiresAt > Date.now(),
        )
      : false;

    if (notesAreFrozen) {
      this.notesMode = false;
    }

    if (!this.board && room.puzzleId) {
      const puzzle = this.sudokuService.getPuzzleById(room.puzzleId);
      this.board = this.sudokuService.createBoard(puzzle);
      void this.syncInitialPublicBoard();
    }

    this.closePendingAbilityIfItNoLongerExists(room);
    this.applyIncomingEffects(room);
    this.render();
  }

  private handleKeyboardInput(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target?.tagName === "INPUT" || target?.tagName === "SELECT" || target?.tagName === "TEXTAREA") {
      return;
    }

    const key = event.key;

    if (/^[1-9]$/.test(key)) {
      event.preventDefault();
      void this.handleNumberAction(Number(key));
      return;
    }

    if (key === "Backspace" || key === "Delete" || key === "0") {
      event.preventDefault();
      this.handleClearCell();
      return;
    }

    if (key.toLowerCase() === "n") {
      event.preventDefault();
      this.handleNotesToggle();
      return;
    }

    if (key === "Escape") {
      this.pendingAbility = null;
      this.selectedNumber = null;
      this.render();
    }
  }

  private handleCellClick(cellIndex: number): void {
    if (this.selectedCellIndex === cellIndex) {
      this.selectedCellIndex = null;
      this.selectedNumber = null;
      this.render();
      return;
    }

    this.selectedCellIndex = cellIndex;
    this.selectedNumber = null;
    this.render();
  }

  private handleCellRightClick(cellIndex: number): void {
    this.selectedCellIndex = cellIndex;

    if (this.selectedNumber === null) {
      this.render();
      return;
    }

    void this.addNoteToSelectedCell(this.selectedNumber).finally(() => {
      this.selectedNumber = null;
      this.render();
    });
  }

  private async handleNumberButtonClick(value: number): Promise<void> {
    await this.handleNumberAction(value);
  }

  private async handleNumberAction(value: number): Promise<void> {
    this.selectedNumber = value;

    if (this.selectedCellIndex === null) {
      this.render();
      return;
    }

    await this.handleNumberInput(value);
    this.selectedNumber = null;
    this.render();
  }

  private async handleNumberInput(value: number): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !this.board || !playerId || this.selectedCellIndex === null) {
      return;
    }

    const player = this.room.players[playerId];

    if (!player || player.isFrozen) {
      return;
    }

    const selectedCell = this.board.cells[this.selectedCellIndex];

    if (!selectedCell || selectedCell.isGiven || selectedCell.isCorrect) {
      return;
    }

    if (this.notesMode) {
      if (!this.canUseNotes()) {
        this.notesMode = false;
        return;
      }

      this.board = this.sudokuService.toggleNote(this.board, this.selectedCellIndex, value);
      return;
    }

    const previousCompletedBlocks = player.completedBlocks ?? [];
    const moveResult = this.sudokuService.enterValue(this.board, this.selectedCellIndex, value);

    this.board = moveResult.board;

    let score = player.score;
    let errors = player.errors;
    let isFrozen: boolean = player.isFrozen;
    let finishedAt = player.finishedAt ?? null;
    let abilities = [...(player.abilities ?? [])];
    let completedBlocks = [...(player.completedBlocks ?? [])];

    if (moveResult.isCorrect) {
      score += this.scoreService.getCellScore(errors);

      const newCompletedBlocks = this.regionService.getNewCompletedBlocks(
        this.board,
        previousCompletedBlocks,
      );

      for (const blockIndex of newCompletedBlocks) {
        completedBlocks.push(blockIndex);
        score += this.scoreService.getBlockScore(errors);

        const newAbility = this.abilityService.rollAbility();

        if (newAbility) {
          abilities = this.abilityService.addAbilityToInventory(abilities, newAbility);
        }
      }

      if (moveResult.isCompleted) {
        const remainingSeconds = this.getRemainingSeconds();

        score += this.scoreService.getCompletionScore(errors);
        score += this.scoreService.getTimeBonus(remainingSeconds, errors);
        finishedAt = Date.now();
      }
    } else {
      errors += 1;

      if (errors >= MAX_ERRORS) {
        isFrozen = true;
      }
    }

    // Clear selection before writing to Firebase. The realtime subscription can
    // re-render immediately after the write, so this prevents a short same-number
    // highlight flash on the cell that has just been filled.
    this.selectedCellIndex = null;
    this.selectedNumber = null;

    await this.firebaseService.updatePlayer(this.roomCode, playerId, {
      score,
      errors,
      progress: this.sudokuService.calculateProgress(this.board),
      isFrozen,
      finishedAt,
      abilities,
      completedBlocks,
      publicBoard: this.sudokuService.createPublicBoard(this.board),
    });

    await this.checkFinishConditions();
  }

  private async addNoteToSelectedCell(value: number): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !this.board || !playerId || this.selectedCellIndex === null) {
      return;
    }

    const player = this.room.players[playerId];

    if (!player || player.isFrozen || !this.canUseNotes()) {
      return;
    }

    const selectedCell = this.board.cells[this.selectedCellIndex];

    if (!selectedCell || selectedCell.isGiven || selectedCell.isCorrect) {
      return;
    }

    this.board = this.sudokuService.toggleNote(this.board, this.selectedCellIndex, value);
  }

  private handleClearCell(): void {
    if (!this.board || this.selectedCellIndex === null) {
      return;
    }

    const selectedCell = this.board.cells[this.selectedCellIndex];

    if (!selectedCell || selectedCell.isGiven || selectedCell.isCorrect) {
      return;
    }

    this.board = this.sudokuService.clearValue(this.board, this.selectedCellIndex);
    this.selectedNumber = null;
    this.render();
  }

  private handleNotesToggle(): void {
    if (!this.canUseNotes()) {
      this.notesMode = false;
      this.render();
      return;
    }

    this.notesMode = !this.notesMode;
    this.selectedNumber = null;
    this.render();
  }

  private async handleAbilityUse(abilityType: AbilityType): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !playerId) {
      return;
    }

    const currentPlayer = this.room.players[playerId];
    const opponent = Object.values(this.room.players).find((player) => player.id !== playerId);

    if (!currentPlayer || !opponent || currentPlayer.isFrozen) {
      return;
    }

    const currentAbilities = currentPlayer.abilities ?? [];

    if (!currentAbilities.includes(abilityType)) {
      return;
    }

    if (this.abilityService.isBlockTargetAbility(abilityType)) {
      this.pendingAbility = abilityType;
      this.render();
      return;
    }

    await this.activateAbility(abilityType);
  }

  private async handleAbilityBlockSelect(blockIndex: number): Promise<void> {
    if (this.pendingAbility === null) {
      return;
    }

    await this.activateAbility(this.pendingAbility, blockIndex);
  }

  private handleAbilityCancel(): void {
    this.pendingAbility = null;
    this.render();
  }

  private async activateAbility(
    abilityType: AbilityType,
    selectedBlockIndex?: number,
  ): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !playerId) {
      return;
    }

    const currentPlayer = this.room.players[playerId];
    const opponent = Object.values(this.room.players).find((player) => player.id !== playerId);

    if (!currentPlayer || !opponent || currentPlayer.isFrozen) {
      return;
    }

    const currentAbilities = currentPlayer.abilities ?? [];

    if (!currentAbilities.includes(abilityType)) {
      this.pendingAbility = null;
      this.render();
      return;
    }

    if (this.abilityService.isBlockTargetAbility(abilityType)) {
      if (selectedBlockIndex === undefined || Number.isNaN(selectedBlockIndex) || selectedBlockIndex < 0 || selectedBlockIndex > 8) {
        return;
      }
    }

    const effect = this.abilityService.createEffect(
      abilityType,
      playerId,
      opponent.id,
      selectedBlockIndex,
    );

    const nextAbilities = this.abilityService.removeAbilityFromInventory(
      currentAbilities,
      abilityType,
    );

    try {
      // Add the effect before consuming the ability. If Firebase rejects the effect,
      // the ability stays in inventory.
      await this.firebaseService.addActiveEffect(this.roomCode, effect);
      await this.firebaseService.updatePlayer(this.roomCode, playerId, {
        abilities: nextAbilities,
      });
      this.pendingAbility = null;
    } catch (error) {
      console.error("Failed to activate ability", error);
      alert("Ability was not activated. Please try again.");
    }

    this.render();
  }

  private async checkFinishConditions(): Promise<void> {
    if (!this.room || this.room.status !== "playing") {
      return;
    }

    const players = Object.values(this.room.players);

    const allPlayersStopped =
      players.length === 2 &&
      players.every(
        (player) => player.isFrozen === true || typeof player.finishedAt === "number",
      );

    const bothFrozen =
      players.length === 2 &&
      players.every((player) => player.isFrozen === true);

    const timeEnded =
      typeof this.room.startedAt === "number" &&
      this.timerService.isTimeEnded(
        this.room.startedAt,
        this.room.durationSeconds,
      );

    if (!allPlayersStopped && !timeEnded) {
      return;
    }

    const winnerPlayerId = this.resolveWinner(this.room);

    const reason = bothFrozen
      ? "both-frozen"
      : timeEnded
        ? "time-ended"
        : "completed";

    await this.roomService.finishGame(this.roomCode, reason, winnerPlayerId);
  }

  private resolveWinner(room: RoomState): string | null {
    const players = Object.values(room.players);
    const [first, second] = players;

    if (!first || !second) {
      return first?.id ?? null;
    }

    if (first.score !== second.score) {
      return first.score > second.score ? first.id : second.id;
    }

    if (first.errors !== second.errors) {
      return first.errors < second.errors ? first.id : second.id;
    }

    if (
      typeof first.finishedAt === "number" &&
      typeof second.finishedAt === "number" &&
      first.finishedAt !== second.finishedAt
    ) {
      return first.finishedAt < second.finishedAt ? first.id : second.id;
    }

    return null;
  }

  private applyIncomingEffects(room: RoomState): void {
    const playerId = this.storageService.getPlayerId();

    if (!playerId || !this.board) {
      return;
    }

    const effects = Object.values(room.activeEffects ?? {}).filter(
      (effect: ActiveEffect) =>
        effect.targetPlayerId === playerId &&
        effect.expiresAt > Date.now(),
    );

    for (const effect of effects) {
      if (
        effect.type === "erase-notes" &&
        effect.payload?.blockIndex !== undefined &&
        !this.appliedInstantEffectIds.has(effect.id)
      ) {
        this.board = this.sudokuService.eraseNotesInBlock(this.board, effect.payload.blockIndex);
        this.appliedInstantEffectIds.add(effect.id);
        void this.firebaseService.removeActiveEffect(this.roomCode, effect.id).catch(() => undefined);
      }
    }
  }

  private closePendingAbilityIfItNoLongerExists(room: RoomState): void {
    const playerId = this.storageService.getPlayerId();

    if (!playerId || this.pendingAbility === null) {
      return;
    }

    const currentPlayer = room.players[playerId];

    if (!currentPlayer || !(currentPlayer.abilities ?? []).includes(this.pendingAbility)) {
      this.pendingAbility = null;
    }
  }

  private async syncInitialPublicBoard(): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (this.hasSyncedInitialPublicBoard || !this.board || !this.room || !playerId) {
      return;
    }

    const currentPlayer = this.room.players[playerId];

    if (!currentPlayer) {
      return;
    }

    const currentPublicBoard = currentPlayer.publicBoard ?? [];
    const initialPublicBoard = this.sudokuService.createPublicBoard(this.board);
    const hasVisibleNumbers = initialPublicBoard.some((value) => value > 0);
    const shouldSync =
      hasVisibleNumbers &&
      (currentPublicBoard.length !== 81 || currentPublicBoard.every((value) => value === 0));

    if (!shouldSync) {
      this.hasSyncedInitialPublicBoard = true;
      return;
    }

    this.hasSyncedInitialPublicBoard = true;

    await this.firebaseService.updatePlayer(this.roomCode, playerId, {
      progress: this.sudokuService.calculateProgress(this.board),
      publicBoard: initialPublicBoard,
    });
  }

  private canUseNotes(): boolean {
    return !this.hasActiveEffect("freeze-notes");
  }

  private hasActiveEffect(type: AbilityType): boolean {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !playerId) {
      return false;
    }

    return Object.values(this.room.activeEffects ?? {}).some(
      (effect: ActiveEffect) =>
        effect.targetPlayerId === playerId &&
        effect.type === type &&
        effect.expiresAt > Date.now(),
    );
  }

  private getRemainingSeconds(): number {
    if (typeof this.room?.startedAt !== "number") {
      return 0;
    }

    return this.timerService.getRemainingSeconds(
      this.room.startedAt,
      this.room.durationSeconds,
    );
  }

  private render(): void {
    const playerId = this.storageService.getPlayerId();

    if (!this.room || !this.board || !playerId || typeof this.room.startedAt !== "number") {
      return;
    }

    const remainingSeconds = this.getRemainingSeconds();

    this.gameView.render({
      room: this.room,
      board: this.board,
      currentPlayerId: playerId,
      selectedCellIndex: this.selectedCellIndex,
      selectedNumber: this.selectedNumber,
      pendingAbility: this.pendingAbility,
      notesMode: this.notesMode,
      remainingSeconds,
      formattedTime: this.timerService.formatTime(remainingSeconds),
    });

    this.gameView.onCellClick((cellIndex) => this.handleCellClick(cellIndex));
    this.gameView.onCellRightClick((cellIndex) => this.handleCellRightClick(cellIndex));
    this.gameView.onNumberClick((value) => void this.handleNumberButtonClick(value));
    this.gameView.onClearClick(() => this.handleClearCell());
    this.gameView.onNotesToggle(() => this.handleNotesToggle());
    this.gameView.onAbilityClick((abilityType) => void this.handleAbilityUse(abilityType));
    this.gameView.onAbilityBlockSelect((blockIndex) => void this.handleAbilityBlockSelect(blockIndex));
    this.gameView.onAbilityCancel(() => this.handleAbilityCancel());
  }
}
