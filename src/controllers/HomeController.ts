import type { AppRouter } from "../router/AppRouter";
import type { RoomService } from "../services/RoomService";
import type { StorageService } from "../services/StorageService";
import type { HomeView } from "../views/HomeView";

export class HomeController {
  constructor(
    private readonly homeView: HomeView,
    private readonly roomService: RoomService,
    private readonly storageService: StorageService,
    private readonly router: AppRouter,
  ) {}

  init(): void {
    const route = this.router.getCurrentRoute();
    const defaultRoomCode = route.roomCode ?? "";
    const defaultNickname = this.storageService.getNickname() ?? "";

    this.homeView.render(defaultRoomCode, defaultNickname);
    this.homeView.onCreateRoom(() => void this.handleCreateRoom());
    this.homeView.onJoinRoom(() => void this.handleJoinRoom());
  }

  destroy(): void {
    // HomeController не має підписок або таймерів, тому очищення не потрібне.
  }

  private async handleCreateRoom(): Promise<void> {
    try {
      const nickname = this.getValidNickname();
      const { roomCode, playerId } = await this.roomService.createRoom(nickname);
      this.storageService.saveNickname(nickname);
      this.storageService.savePlayerId(playerId);
      this.router.goLobby(roomCode);
    } catch (error) {
      this.homeView.showError(error instanceof Error ? error.message : "Failed to create room.");
    }
  }

  private async handleJoinRoom(): Promise<void> {
    try {
      const nickname = this.getValidNickname();
      const roomCode = this.homeView.getRoomCode();

      if (!roomCode) {
        throw new Error("Enter room code.");
      }

      const { playerId } = await this.roomService.joinRoom(roomCode, nickname);
      this.storageService.saveNickname(nickname);
      this.storageService.savePlayerId(playerId);
      this.router.goLobby(roomCode);
    } catch (error) {
      this.homeView.showError(error instanceof Error ? error.message : "Failed to join room.");
    }
  }

  private getValidNickname(): string {
    const nickname = this.homeView.getNickname();

    if (nickname.length < 2) {
      throw new Error("Nickname must contain at least 2 characters.");
    }

    return nickname;
  }
}
