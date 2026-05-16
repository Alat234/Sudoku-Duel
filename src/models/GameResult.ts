export type PlayerResult = {
  playerId: string;
  nickname: string;
  score: number;
  errors: number;
  progress: number;
  finishedAt: number | null;
  isFrozen: boolean;
};

export type GameResult = {
  winnerPlayerId: string | null;
  isDraw: boolean;
  reason: string;
  players: PlayerResult[];
};
