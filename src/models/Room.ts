import type { Difficulty } from "./Difficulty";
import type { PlayerState } from "./Player";
import type { ActiveEffect } from "./Ability";

export type RoomStatus = "waiting" | "lobby" | "playing" | "finished";
export type FinishReason = "completed" | "time-ended" | "both-frozen" | "player-left";

export type RoomState = {
  roomCode: string;
  status: RoomStatus;
  difficulty: Difficulty;
  puzzleId: string | null;
  createdAt: number;
  startedAt: number | null;
  finishedAt: number | null;
  durationSeconds: number;
  hostPlayerId: string;
  players: Record<string, PlayerState>;
  activeEffects: Record<string, ActiveEffect>;
  winnerPlayerId: string | null;
  finishReason: FinishReason | null;
};
