import { BaseView } from "./BaseView";

export class HomeView extends BaseView {
  render(defaultRoomCode = "", defaultNickname = ""): void {
    this.setHTML(`
      <main class="page home-page polished-page">
        <section class="card hero-card polished-card">
          <div class="hero-badge">TypeScript · Firebase · Realtime Duel</div>
          <p class="eyebrow">Semester project</p>
          <h1>Sudoku Duel</h1>
          <p class="muted hero-text">
            Create a private room, invite your opponent, solve the same Sudoku and win by accuracy, speed and score.
          </p>

          <div class="home-rules-grid">
            <div><strong>100</strong><span>points per correct cell</span></div>
            <div><strong>4</strong><span>mistakes freeze player</span></div>
            <div><strong>2</strong><span>players in one room</span></div>
          </div>

          <label class="field">
            <span>Nickname</span>
            <input id="nickname-input" type="text" maxlength="20" placeholder="Vlad" value="${defaultNickname}" />
          </label>

          <button id="create-room-button" class="primary-button full-width-button">Create room</button>

          <div class="divider"><span>or join existing room</span></div>

          <label class="field">
            <span>Room code</span>
            <input id="room-code-input" type="text" maxlength="8" placeholder="ABCD12" value="${defaultRoomCode}" />
          </label>

          <button id="join-room-button" class="secondary-button full-width-button">Join room</button>
        </section>
      </main>
    `);
  }

  getNickname(): string {
    return (document.getElementById("nickname-input") as HTMLInputElement | null)?.value.trim() ?? "";
  }

  getRoomCode(): string {
    return (document.getElementById("room-code-input") as HTMLInputElement | null)?.value.trim().toUpperCase() ?? "";
  }

  onCreateRoom(handler: () => void): void {
    document.getElementById("create-room-button")?.addEventListener("click", handler);
  }

  onJoinRoom(handler: () => void): void {
    document.getElementById("join-room-button")?.addEventListener("click", handler);
  }

  showError(message: string): void {
    alert(message);
  }
}
