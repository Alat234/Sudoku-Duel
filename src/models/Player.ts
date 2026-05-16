import type { AbilityType } from "./Ability";

export type PlayerRole = "host" | "guest";

export type PlayerState = {
  id: string;
  nickname: string;
  role: PlayerRole;
  ready: boolean;
  connected: boolean;
  score: number;
  errors: number;
  progress: number;
  isFrozen: boolean;
  finishedAt: number | null;
  abilities: AbilityType[];
  completedRows: number[];
  completedColumns: number[];
  completedBlocks: number[];
  publicBoard: number[];
};
