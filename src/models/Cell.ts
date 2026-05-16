export type Cell = {
  index: number;
  row: number;
  column: number;
  block: number;
  givenValue: number | null;
  currentValue: number | null;
  solutionValue: number;
  notes: number[];
  isGiven: boolean;
  isCorrect: boolean;
  isWrong: boolean;
};
