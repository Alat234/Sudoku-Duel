import type { Difficulty } from "../models/Difficulty";
import type { RoomState } from "../models/Room";
import type { AppRouter } from "../router/AppRouter";
import type { FirebaseService } from "../services/FirebaseService";
import type { RoomService } from "../services/RoomService";
import type { StorageService } from "../services/StorageService";
import type { LobbyView } from "../views/LobbyView";

export class LobbyController {
  private unsubscribe: (() => void) | null = null;
  private roomCode = "";

  constructor(
    private readonly lobbyView: LobbyView,
    private readonly roomService: RoomService,
    private readonly firebaseService: FirebaseService,
    private readonly storageService: StorageService,
    private readonly router: AppRouter,
  ) {}

  init(roomCode: string): void {
    this.roomCode = roomCode;
    this.unsubscribe = this.firebaseService.subscribeToRoom(roomCode, (room) => {
      void this.handleRoomUpdate(room);
    });
  }

  destroy(): void {
    this.unsubscribe?.();
  }

  private async handleRoomUpdate(room: RoomState | null): Promise<void> {
    if (!room) {
      this.router.goHome(this.roomCode);
      return;
    }

    const playerId = this.storageService.getPlayerId();

    if (!playerId || !room.players[playerId]) {
      this.router.goHome(room.roomCode);
      return;
    }

    if (room.status === "playing") {
      this.router.goGame(room.roomCode);
      return;
    }

    if (room.status === "finished") {
      this.router.goResult(room.roomCode);
      return;
    }

    const inviteLink = this.router.getInviteLink(room.roomCode);
    this.lobbyView.render(room, playerId, inviteLink);

    this.lobbyView.onReadyChange((ready) => void this.handleReadyChange(ready));
    this.lobbyView.onDifficultyChange((difficulty) => void this.handleDifficultyChange(difficulty));
    this.lobbyView.onCopyInviteLink(() => void navigator.clipboard.writeText(inviteLink));
    this.lobbyView.onLeaveRoom(() => void this.handleLeaveRoom(playerId));

    await this.roomService.tryStartGame(room.roomCode, room);
  }

  private async handleReadyChange(ready: boolean): Promise<void> {
    const playerId = this.storageService.getPlayerId();

    if (!playerId) {
      return;
    }

    await this.roomService.setReady(this.roomCode, playerId, ready);
  }

  private async handleDifficultyChange(difficulty: Difficulty): Promise<void> {
    await this.roomService.setDifficulty(this.roomCode, difficulty);
  }

  private async handleLeaveRoom(playerId: string): Promise<void> {
    await this.roomService.leaveRoom(this.roomCode, playerId);
    this.storageService.clearSession();
    this.router.goHome();
  }
}
