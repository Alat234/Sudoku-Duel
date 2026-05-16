import type { GameResult } from "../models/GameResult";
import type { RoomState } from "../models/Room";
import type { AppRouter } from "../router/AppRouter";
import type { FirebaseService } from "../services/FirebaseService";
import type { RoomService } from "../services/RoomService";
import type { ResultView } from "../views/ResultView";

export class ResultController {
  private roomCode = "";
  private unsubscribe: (() => void) | null = null;

  constructor(
    private readonly resultView: ResultView,
    private readonly firebaseService: FirebaseService,
    private readonly roomService: RoomService,
    private readonly router: AppRouter,
  ) {}

  async init(roomCode: string): Promise<void> {
    this.roomCode = roomCode;

    const room = await this.firebaseService.getRoom(roomCode);

    if (!room) {
      this.router.goHome();
      return;
    }

    this.resultView.render(this.buildResult(room));
    this.resultView.onBackHome(() => this.router.goHome());
    this.resultView.onPlayAgain(() => void this.handlePlayAgain());

    this.unsubscribe = this.firebaseService.subscribeToRoom(roomCode, (nextRoom) => {
      if (!nextRoom) {
        this.router.goHome();
        return;
      }

      if (nextRoom.status === "lobby" || nextRoom.status === "waiting") {
        this.router.goLobby(nextRoom.roomCode);
      }
    });
  }

  destroy(): void {
    this.unsubscribe?.();
  }

  private async handlePlayAgain(): Promise<void> {
    await this.roomService.resetRoomForRematch(this.roomCode);
    this.router.goLobby(this.roomCode);
  }

  private buildResult(room: RoomState): GameResult {
    const players = Object.values(room.players).map((player) => ({
      playerId: player.id,
      nickname: player.nickname,
      score: player.score,
      errors: player.errors,
      progress: player.progress,
      finishedAt: player.finishedAt ?? null,
      isFrozen: player.isFrozen,
    }));

    return {
      winnerPlayerId: room.winnerPlayerId ?? null,
      isDraw: (room.winnerPlayerId ?? null) === null,
      reason: room.finishReason ?? "completed",
      players,
    };
  }
}
