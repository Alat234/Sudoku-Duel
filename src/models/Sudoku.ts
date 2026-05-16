import type { Difficulty } from "./Difficulty";
import type { Cell } from "./Cell";

export type SudokuPuzzle = {
  id: string;
  difficulty: Difficulty;
  puzzle: number[];
  solution: number[];
};

export type SudokuBoard = {
  puzzleId: string;
  cells: Cell[];
};
