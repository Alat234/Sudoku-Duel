import { SCORE_CONFIG } from "../config/gameConfig";

export class ScoreService {
  getMultiplier(errors: number): number {
    if (errors >= 4) {
      return 0;
    }

    return 1 - errors * SCORE_CONFIG.errorPenaltyStep;
  }

  getCellScore(errors: number): number {
    return Math.round(SCORE_CONFIG.correctCell * this.getMultiplier(errors));
  }

  getBlockScore(errors: number): number {
    return Math.round(SCORE_CONFIG.completedBlock * this.getMultiplier(errors));
  }

  getCompletionScore(errors: number): number {
    return Math.round(SCORE_CONFIG.completedBoard * this.getMultiplier(errors));
  }

  getTimeBonus(remainingSeconds: number, errors: number): number {
    const chunks = Math.floor(Math.max(0, remainingSeconds) / 10);
    return Math.round(chunks * SCORE_CONFIG.timeBonusPerTenSeconds * this.getMultiplier(errors));
  }
}
