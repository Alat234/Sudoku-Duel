import { formatTime } from "../utils/time";

export class TimerService {
  getRemainingSeconds(startedAt: number, durationSeconds: number): number {
    const elapsedSeconds = Math.floor((Date.now() - startedAt) / 1000);
    return Math.max(0, durationSeconds - elapsedSeconds);
  }

  isTimeEnded(startedAt: number, durationSeconds: number): boolean {
    return this.getRemainingSeconds(startedAt, durationSeconds) <= 0;
  }

  formatTime(seconds: number): string {
    return formatTime(seconds);
  }
}
