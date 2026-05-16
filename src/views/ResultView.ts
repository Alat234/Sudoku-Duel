import type { GameResult } from "../models/GameResult";
import { BaseView } from "./BaseView";

export class ResultView extends BaseView {
  render(result: GameResult): void {
    const winner = result.players.find((player) => player.playerId === result.winnerPlayerId);
    const sortedPlayers = [...result.players].sort((first, second) => second.score - first.score);

    this.setHTML(`
      <main class="page result-page polished-page">
        <section class="card result-card polished-card result-card--celebration">
          <div class="result-hero">
            <div class="result-trophy" aria-hidden="true">${result.isDraw ? "=" : "★"}</div>
            <p class="eyebrow">Match finished</p>
            <h1>${result.isDraw ? "Draw match" : `${winner?.nickname ?? "Unknown"} wins`}</h1>
            <p class="muted result-reason">${this.formatReason(result.reason)}</p>
          </div>

          <div class="result-list result-grid">
            ${sortedPlayers.map((player, index) => `
              <div class="player-card result-player-card ${player.playerId === result.winnerPlayerId ? "winner" : ""}">
                <div class="result-player-topline">
                  <div>
                    <span class="result-place">#${index + 1}</span>
                    <strong>${player.nickname}</strong>
                  </div>
                  <span class="player-status-pill ${player.isFrozen ? "danger" : "ok"}">
                    ${player.isFrozen ? "Frozen" : "Active"}
                  </span>
                </div>
                <dl>
                  <div><dt>Score</dt><dd>${player.score}</dd></div>
                  <div><dt>Errors</dt><dd>${player.errors}/4</dd></div>
                  <div><dt>Progress</dt><dd>${player.progress}%</dd></div>
                </dl>
              </div>
            `).join("")}
          </div>

          <div class="result-actions">
            <button id="play-again-button" class="primary-button">Play again</button>
            <button id="back-home-button" class="secondary-button">Back to home</button>
          </div>
        </section>
      </main>
    `);
  }

  onPlayAgain(handler: () => void): void {
    document.getElementById("play-again-button")?.addEventListener("click", handler);
  }

  onBackHome(handler: () => void): void {
    document.getElementById("back-home-button")?.addEventListener("click", handler);
  }

  private formatReason(reason: string): string {
    const reasonMap: Record<string, string> = {
      completed: "Sudoku completed",
      "time-ended": "Timer ended",
      "both-frozen": "Both players are frozen",
      "player-left": "Opponent left the room",
    };

    return reasonMap[reason] ?? reason;
  }
}
