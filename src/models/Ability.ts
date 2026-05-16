export type AbilityType = "dark-flash" | "freeze-notes" | "erase-notes" | "peek-block";

export type AbilityConfig = {
  type: AbilityType;
  label: string;
  description: string;
  durationSeconds: number;
  weight: number;
};

export type ActiveEffect = {
  id: string;
  type: AbilityType;
  fromPlayerId: string;
  targetPlayerId: string;
  createdAt: number;
  expiresAt: number;
  payload?: {
    blockIndex?: number;
  };
};
