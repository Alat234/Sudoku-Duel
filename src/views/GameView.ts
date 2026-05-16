import { ABILITIES } from "../config/gameConfig";
import type { AbilityType, ActiveEffect } from "../models/Ability";
import type { PlayerState } from "../models/Player";
import type { SudokuBoard } from "../models/Sudoku";
import type { RoomState } from "../models/Room";
import { AbilityPanelView } from "./AbilityPanelView";
import { BaseView } from "./BaseView";
import { PlayerStatusView } from "./PlayerStatusView";
import { SudokuBoardView } from "./SudokuBoardView";

export class GameView extends BaseView {
  private readonly boardView = new SudokuBoardView();
  private readonly abilityPanelView = new AbilityPanelView();
  private readonly playerStatusView = new PlayerStatusView();

  render(params: {
    room: RoomState;
    board: SudokuBoard;
    currentPlayerId: string;
    selectedCellIndex: number | null;
    selectedNumber: number | null;
    pendingAbility: AbilityType | null;
    notesMode: boolean;
    remainingSeconds: number;
    formattedTime: string;
  }): void {
    const currentPlayer = params.room.players[params.currentPlayerId];
    const opponent = Object.values(params.room.players).find(
      (player) => player.id !== params.currentPlayerId,
    );

    const allEffects = Object.values(params.room.activeEffects ?? {});
    const activeIncomingEffects = allEffects.filter(
      (effect: ActiveEffect) =>
        effect.targetPlayerId === params.currentPlayerId && effect.expiresAt > Date.now(),
    );
    const activeOutgoingEffects = allEffects.filter(
      (effect: ActiveEffect) =>
        effect.fromPlayerId === params.currentPlayerId && effect.expiresAt > Date.now(),
    );

    const hasDarkFlash = activeIncomingEffects.some((effect) => effect.type === "dark-flash");
    const hasFrozenNotes = activeIncomingEffects.some((effect) => effect.type === "freeze-notes");

    this.setHTML(`
      <main class="page game-page">
        <header class="game-header">
          <div>
            <p class="eyebrow">${params.room.difficulty} duel</p>
            <h1>${params.formattedTime}</h1>
            <p class="muted game-control-hint">
              Click a cell, then press 1-9 or use the number buttons. Notes mode writes notes instead of answers.
            </p>
          </div>

        </header>

        <section class="game-layout">
          <aside class="sidebar">
            ${this.playerStatusView.render("You", currentPlayer)}
            ${this.playerStatusView.render("Opponent", opponent)}
            <section class="card small-card">
              <div class="ability-card-header">
                <h3>Abilities</h3>
                <span>${(currentPlayer?.abilities ?? []).length}/2</span>
              </div>
              ${this.abilityPanelView.render(currentPlayer?.abilities ?? [])}
            </section>
            ${this.renderPeekPreview(activeOutgoingEffects, opponent, params.board)}
          </aside>

          <section class="board-section ${hasDarkFlash ? "board-section--dark-flash" : ""}">
            ${currentPlayer?.isFrozen ? `<div class="freeze-banner">You are frozen after 4 mistakes. Wait for match end.</div>` : ""}
            ${hasFrozenNotes ? `<div class="ability-status-banner">Freeze Notes is active. Notes are temporarily disabled.</div>` : ""}
            ${this.boardView.render(params.board, params.selectedCellIndex, activeIncomingEffects)}
            <div class="number-pad" aria-label="Number pad">
              ${Array.from({ length: 9 }, (_, index) => {
                const value = index + 1;
                const activeClass = params.selectedNumber === value ? " active" : "";
                return `<button type="button" class="number-button${activeClass}" data-number="${value}">${value}</button>`;
              }).join("")}
              <button type="button" id="clear-cell-button" class="number-button clear">Clear</button>
              <button
                type="button"
                id="notes-toggle"
                class="number-button notes-pad-button ${params.notesMode ? "active" : ""} ${hasFrozenNotes ? "button-disabled" : ""}"
                ${hasFrozenNotes ? "disabled" : ""}
              >
                ${hasFrozenNotes ? "Notes: FROZEN" : `Notes: ${params.notesMode ? "ON" : "OFF"}`}
              </button>
            </div>
          </section>
        </section>

        ${this.renderAbilityBlockModal(params.pendingAbility, opponent)}
      </main>
    `);
  }

  onNumberClick(handler: (value: number) => void): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-number]").forEach((button) => {
      button.addEventListener("click", () => handler(Number(button.dataset.number)));
    });
  }

  onCellClick(handler: (cellIndex: number) => void): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-cell-index]").forEach((button) => {
      button.addEventListener("click", () => handler(Number(button.dataset.cellIndex)));
    });
  }

  onCellRightClick(handler: (cellIndex: number) => void): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-cell-index]").forEach((button) => {
      button.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        handler(Number(button.dataset.cellIndex));
      });
    });
  }

  onClearClick(handler: () => void): void {
    this.root.querySelector<HTMLButtonElement>("#clear-cell-button")?.addEventListener("click", handler);
  }

  onNotesToggle(handler: () => void): void {
    this.root.querySelector<HTMLButtonElement>("#notes-toggle")?.addEventListener("click", handler);
  }

  onAbilityClick(handler: (abilityType: AbilityType) => void): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-ability-type]").forEach((button) => {
      button.addEventListener("click", () => handler(button.dataset.abilityType as AbilityType));
    });
  }

  onAbilityBlockSelect(handler: (blockIndex: number) => void): void {
    this.root.querySelectorAll<HTMLButtonElement>("[data-ability-block]").forEach((button) => {
      button.addEventListener("click", () => handler(Number(button.dataset.abilityBlock)));
    });
  }

  onAbilityCancel(handler: () => void): void {
    this.root.querySelector<HTMLButtonElement>("#ability-cancel-button")?.addEventListener("click", handler);
    this.root.querySelector<HTMLElement>("[data-ability-modal-backdrop]")?.addEventListener("click", handler);
  }

  private renderAbilityBlockModal(
    pendingAbility: AbilityType | null,
    opponent: PlayerState | undefined,
  ): string {
    if (!pendingAbility) {
      return "";
    }

    const config = ABILITIES.find((ability) => ability.type === pendingAbility);
    const isPeek = pendingAbility === "peek-block";

    return `
      <div class="ability-modal" role="dialog" aria-modal="true" aria-label="Choose opponent block">
        <div class="ability-modal__backdrop" data-ability-modal-backdrop></div>
        <section class="ability-modal__card">
          <div class="ability-modal__header">
            <div>
              <p class="eyebrow">Ability target</p>
              <h2>${config?.label ?? pendingAbility}</h2>
              <p class="muted">
                ${isPeek
                  ? "Choose one opponent 3x3 block to reveal only the numbers they have already entered."
                  : "Choose one opponent 3x3 block where notes should be erased."}
              </p>
            </div>
            <button type="button" id="ability-cancel-button" class="ghost-button">Cancel</button>
          </div>

          <div class="ability-block-grid">
            ${Array.from({ length: 9 }, (_, blockIndex) => `
              <button type="button" class="ability-block-card" data-ability-block="${blockIndex}">
                <span class="ability-block-card__title">Block ${blockIndex + 1}</span>
                ${this.renderMiniBlock([], blockIndex, false)}
              </button>
            `).join("")}
          </div>

          <p class="ability-modal__hint">
            Cancel will close this window and the ability will stay in your inventory.
          </p>
        </section>
      </div>
    `;
  }

  private renderPeekPreview(
    activeOutgoingEffects: ActiveEffect[],
    opponent: PlayerState | undefined,
    board: SudokuBoard,
  ): string {
    const peekEffect = activeOutgoingEffects.find(
      (effect) => effect.type === "peek-block" && effect.payload?.blockIndex !== undefined,
    );

    if (!peekEffect || !opponent || peekEffect.payload?.blockIndex === undefined) {
      return "";
    }

    const remainingSeconds = Math.max(0, Math.ceil((peekEffect.expiresAt - Date.now()) / 1000));
    const givenBoard = board.cells.map((cell) => (cell.isGiven ? cell.givenValue ?? 0 : 0));
    const opponentBoard = opponent.publicBoard ?? [];
    const mergedPublicBoard = givenBoard.map((givenValue, index) => {
      const opponentValue = opponentBoard[index] ?? 0;
      return opponentValue > 0 ? opponentValue : givenValue;
    });

    return `
      <section class="card small-card peek-preview-card">
        <div class="ability-card-header">
          <h3>Peek Block</h3>
          <span>${remainingSeconds}s</span>
        </div>
        <p class="muted">Opponent block ${peekEffect.payload.blockIndex + 1}</p>
        ${this.renderMiniBlock(mergedPublicBoard, peekEffect.payload.blockIndex, true)}
      </section>
    `;
  }

  private renderMiniBlock(publicBoard: number[], blockIndex: number, showValues: boolean): string {
    const indexes = this.getBlockIndexes(blockIndex);

    return `
      <div class="mini-block-grid ${showValues ? "mini-block-grid--values" : "mini-block-grid--empty"}">
        ${indexes.map((cellIndex) => {
          const value = publicBoard[cellIndex] ?? 0;
          return `<span>${showValues && value > 0 ? value : ""}</span>`;
        }).join("")}
      </div>
    `;
  }

  private getBlockIndexes(blockIndex: number): number[] {
    const blockRow = Math.floor(blockIndex / 3) * 3;
    const blockColumn = (blockIndex % 3) * 3;
    const indexes: number[] = [];

    for (let rowOffset = 0; rowOffset < 3; rowOffset += 1) {
      for (let columnOffset = 0; columnOffset < 3; columnOffset += 1) {
        indexes.push((blockRow + rowOffset) * 9 + blockColumn + columnOffset);
      }
    }

    return indexes;
  }
}
