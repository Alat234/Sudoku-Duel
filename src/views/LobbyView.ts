import { DIFFICULTY_SETTINGS } from "../config/gameConfig";
import type { Difficulty } from "../models/Difficulty";
import type { RoomState } from "../models/Room";
import { BaseView } from "./BaseView";

export class LobbyView extends BaseView {
  render(room: RoomState, currentPlayerId: string, inviteLink: string): void {
    const currentPlayer = room.players[currentPlayerId];
    const isHost = room.hostPlayerId === currentPlayerId;
    const players = Object.values(room.players);
    const readyCount = players.filter((player) => player.ready).length;

    const safeInviteLink = inviteLink || `${window.location.origin}${window.location.pathname}#/home?room=${encodeURIComponent(room.roomCode)}`;

    this.setHTML(`
      <main class="page lobby-page polished-page">
        <section class="card lobby-card polished-card">
          <div class="lobby-topline">
            <div>
              <p class="eyebrow">Room</p>
              <h1>${room.roomCode}</h1>
            </div>
            <span class="lobby-status-pill">${readyCount}/${players.length} ready</span>
          </div>

          <p class="muted">Send this code or invite link to your opponent. The match starts automatically when both players press Ready.</p>

          <div class="copy-box invite-copy-box">
            <input id="invite-link" value="${safeInviteLink}" readonly />
            <button id="copy-invite-button" class="secondary-button">Copy</button>
          </div>

          <div class="players-list lobby-players-list">
            ${players.map((player) => `
              <div class="player-card lobby-player-card ${player.ready ? "ready" : ""}">
                <div>
                  <strong>${player.nickname}</strong>
                  <span>${player.role}${player.id === currentPlayerId ? " · you" : ""}</span>
                </div>
                <em>${player.ready ? "Ready" : "Waiting"}</em>
              </div>
            `).join("")}
          </div>

          <label class="field">
            <span>Difficulty ${isHost ? "" : "(host only)"}</span>
            <select id="difficulty-select" ${isHost ? "" : "disabled"}>
              ${(Object.keys(DIFFICULTY_SETTINGS) as Difficulty[]).map((difficulty) => `
                <option value="${difficulty}" ${room.difficulty === difficulty ? "selected" : ""}>
                  ${DIFFICULTY_SETTINGS[difficulty].label} · ${Math.round(DIFFICULTY_SETTINGS[difficulty].durationSeconds / 60)} min
                </option>
              `).join("")}
            </select>
          </label>

          <div class="lobby-actions">
            <button id="ready-button" class="primary-button">
              ${currentPlayer?.ready ? "Cancel ready" : "Ready"}
            </button>
            <button id="leave-button" class="ghost-button">Leave room</button>
          </div>
        </section>
      </main>
    `);
  }

  onReadyChange(handler: (ready: boolean) => void): void {
    document.getElementById("ready-button")?.addEventListener("click", () => {
      const text = document.getElementById("ready-button")?.textContent ?? "";
      handler(text.includes("Ready"));
    });
  }

  onDifficultyChange(handler: (difficulty: Difficulty) => void): void {
    document.getElementById("difficulty-select")?.addEventListener("change", (event) => {
      handler((event.target as HTMLSelectElement).value as Difficulty);
    });
  }

  onCopyInviteLink(handler: () => void): void {
    document.getElementById("copy-invite-button")?.addEventListener("click", handler);
  }

  onLeaveRoom(handler: () => void): void {
    document.getElementById("leave-button")?.addEventListener("click", handler);
  }
}
