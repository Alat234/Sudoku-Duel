import type { PlayerState } from "../models/Player";

export class PlayerStatusView {
  render(title: string, player: PlayerState | undefined): string {
    if (!player) {
      return `<section class="status-card muted">${title}: waiting...</section>`;
    }

    return `
      <section class="status-card ${player.isFrozen ? "frozen" : ""}">
        <p class="eyebrow">${title}</p>
        <h3>${player.nickname}</h3>
        <dl>
          <div><dt>Score</dt><dd>${player.score}</dd></div>
          <div><dt>Errors</dt><dd>${player.errors}/4</dd></div>
          <div><dt>Progress</dt><dd>${player.progress}%</dd></div>
          <div><dt>Status</dt><dd>${player.isFrozen ? "Frozen" : "Playing"}</dd></div>
        </dl>
      </section>
    `;
  }
}
