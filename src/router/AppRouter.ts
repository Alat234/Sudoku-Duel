export type AppRoute = {
  page: "home" | "lobby" | "game" | "result";
  roomCode?: string;
};

export class AppRouter {
  goHome(roomCode?: string): void {
    window.location.hash = roomCode
      ? `#/home?room=${encodeURIComponent(roomCode)}`
      : "#/home";
  }

  goLobby(roomCode: string): void {
    window.location.hash = `#/lobby?room=${encodeURIComponent(roomCode)}`;
  }

  goGame(roomCode: string): void {
    window.location.hash = `#/game?room=${encodeURIComponent(roomCode)}`;
  }

  goResult(roomCode: string): void {
    window.location.hash = `#/result?room=${encodeURIComponent(roomCode)}`;
  }

  getCurrentRoute(): AppRoute {
    const hash = window.location.hash || "#/home";
    const [pathPart, queryPart = ""] = hash.replace("#", "").split("?");
    const params = new URLSearchParams(queryPart);
    const roomCode = params.get("room") ?? undefined;

    if (pathPart === "/lobby") {
      return { page: "lobby", roomCode };
    }

    if (pathPart === "/game") {
      return { page: "game", roomCode };
    }

    if (pathPart === "/result") {
      return { page: "result", roomCode };
    }

    return { page: "home", roomCode };
  }

  getInviteLink(roomCode: string): string {
    const url = new URL(window.location.href);
    url.hash = `#/home?room=${encodeURIComponent(roomCode)}`;
    return url.toString();
  }
}
