export class StorageService {
  private readonly playerIdKey = "sudoku-duel:player-id";
  private readonly nicknameKey = "sudoku-duel:nickname";

  savePlayerId(playerId: string): void {
    localStorage.setItem(this.playerIdKey, playerId);
  }

  getPlayerId(): string | null {
    return localStorage.getItem(this.playerIdKey);
  }

  saveNickname(nickname: string): void {
    localStorage.setItem(this.nicknameKey, nickname);
  }

  getNickname(): string | null {
    return localStorage.getItem(this.nicknameKey);
  }

  clearSession(): void {
    localStorage.removeItem(this.playerIdKey);
  }
}
