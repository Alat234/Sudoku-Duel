import { PUZZLES } from "../data/puzzles";
import type { Cell } from "../models/Cell";
import type { Difficulty } from "../models/Difficulty";
import type { SudokuBoard, SudokuPuzzle } from "../models/Sudoku";

export class SudokuService {
  getPuzzleById(puzzleId: string): SudokuPuzzle {
    const puzzle = PUZZLES.find((item) => item.id === puzzleId);

    if (!puzzle) {
      throw new Error(`Puzzle not found: ${puzzleId}`);
    }

    return puzzle;
  }

  getRandomPuzzleByDifficulty(difficulty: Difficulty): SudokuPuzzle {
    const puzzles = PUZZLES.filter((puzzle) => puzzle.difficulty === difficulty);

    if (puzzles.length === 0) {
      throw new Error(`No puzzles for difficulty: ${difficulty}`);
    }

    return puzzles[Math.floor(Math.random() * puzzles.length)];
  }

  createBoard(puzzle: SudokuPuzzle): SudokuBoard {
    const cells: Cell[] = puzzle.puzzle.map((value, index) => {
      const row = Math.floor(index / 9);
      const column = index % 9;
      const block = Math.floor(row / 3) * 3 + Math.floor(column / 3);
      const givenValue = value === 0 ? null : value;

      return {
        index,
        row,
        column,
        block,
        givenValue,
        currentValue: givenValue,
        solutionValue: puzzle.solution[index],
        notes: [],
        isGiven: givenValue !== null,
        isCorrect: givenValue !== null,
        isWrong: false,
      };
    });

    return {
      puzzleId: puzzle.id,
      cells,
    };
  }

  enterValue(
    board: SudokuBoard,
    cellIndex: number,
    value: number,
  ): { board: SudokuBoard; isCorrect: boolean; isCompleted: boolean } {
    const cell = board.cells[cellIndex];

    if (!cell || cell.isGiven) {
      return { board, isCorrect: false, isCompleted: this.isBoardCompleted(board) };
    }

    const isCorrect = cell.solutionValue === value;
    const nextBoard: SudokuBoard = {
      ...board,
      cells: board.cells.map((item) => {
        if (item.index !== cellIndex) {
          return item;
        }

        return {
          ...item,
          currentValue: value,
          notes: isCorrect ? [] : item.notes,
          isCorrect,
          isWrong: !isCorrect,
        };
      }),
    };

    return {
      board: nextBoard,
      isCorrect,
      isCompleted: this.isBoardCompleted(nextBoard),
    };
  }

  clearValue(board: SudokuBoard, cellIndex: number): SudokuBoard {
    return {
      ...board,
      cells: board.cells.map((cell) => {
        if (cell.index !== cellIndex || cell.isGiven) {
          return cell;
        }

        return {
          ...cell,
          currentValue: null,
          notes: [],
          isCorrect: false,
          isWrong: false,
        };
      }),
    };
  }

  toggleNote(board: SudokuBoard, cellIndex: number, value: number): SudokuBoard {
    return {
      ...board,
      cells: board.cells.map((cell) => {
        if (cell.index !== cellIndex || cell.isGiven || cell.currentValue !== null) {
          return cell;
        }

        const hasNote = cell.notes.includes(value);
        const notes = hasNote
          ? cell.notes.filter((note) => note !== value)
          : [...cell.notes, value].sort((a, b) => a - b);

        return {
          ...cell,
          notes,
        };
      }),
    };
  }

  eraseNotesInBlock(board: SudokuBoard, blockIndex: number): SudokuBoard {
    return {
      ...board,
      cells: board.cells.map((cell) => {
        if (cell.block !== blockIndex) {
          return cell;
        }

        return {
          ...cell,
          notes: [],
        };
      }),
    };
  }

  calculateProgress(board: SudokuBoard): number {
    const correctCells = board.cells.filter((cell) => cell.isCorrect).length;
    return Math.round((correctCells / board.cells.length) * 100);
  }

  createPublicBoard(board: SudokuBoard): number[] {
    return board.cells.map((cell) => (cell.isCorrect && cell.currentValue ? cell.currentValue : 0));
  }

  isBoardCompleted(board: SudokuBoard): boolean {
    return board.cells.every((cell) => cell.isCorrect && cell.currentValue === cell.solutionValue);
  }
}
