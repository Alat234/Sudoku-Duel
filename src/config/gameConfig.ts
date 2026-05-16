import type { AbilityConfig } from "../models/Ability";
import type { Difficulty, DifficultySettings } from "../models/Difficulty";

export const MAX_PLAYERS = 2;
export const MAX_ERRORS = 4;
export const BOARD_SIZE = 81;

export const DIFFICULTY_SETTINGS: Record<Difficulty, DifficultySettings> = {
  easy: {
    label: "Easy",
    durationSeconds: 5 * 60,
  },
  medium: {
    label: "Medium",
    durationSeconds: 8 * 60,
  },
  hard: {
    label: "Hard",
    durationSeconds: 12 * 60,
  },
};

export const SCORE_CONFIG = {
  correctCell: 100,
  completedBlock: 1000,
  completedBoard: 10000,
  timeBonusPerTenSeconds: 100,
  errorPenaltyStep: 0.25,
};

// Зараз абілка випадає завжди після першого завершення квадрата 3x3.
// Якщо захочеш баланс як раніше, зміни 1.0 на 0.3.
export const ABILITY_DROP_CHANCE = 1.0;
export const MAX_ABILITIES_IN_INVENTORY = 2;

export const ABILITIES: AbilityConfig[] = [
  {
    type: "dark-flash",
    label: "Dark Flash",
    description: "Darkens opponent board for 5 seconds.",
    durationSeconds: 5,
    weight: 40,
  },
  {
    type: "freeze-notes",
    label: "Freeze Notes",
    description: "Disables opponent notes for 10 seconds.",
    durationSeconds: 10,
    weight: 30,
  },
  {
    type: "erase-notes",
    label: "Erase Notes",
    description: "Erases notes in selected opponent block.",
    durationSeconds: 0,
    weight: 20,
  },
  {
    type: "peek-block",
    label: "Peek Block",
    description: "Shows selected opponent block for 5 seconds.",
    durationSeconds: 5,
    weight: 10,
  },
];
