import type { SudokuBoard } from "../models/Sudoku";

export class RegionService {
  getRowIndex(cellIndex: number): number {
    return Math.floor(cellIndex / 9);
  }

  getColumnIndex(cellIndex: number): number {
    return cellIndex % 9;
  }

  getBlockIndex(cellIndex: number): number {
    const row = this.getRowIndex(cellIndex);
    const column = this.getColumnIndex(cellIndex);
    return Math.floor(row / 3) * 3 + Math.floor(column / 3);
  }

  getBlockCellIndexes(blockIndex: number): number[] {
    const startRow = Math.floor(blockIndex / 3) * 3;
    const startColumn = (blockIndex % 3) * 3;
    const indexes: number[] = [];

    for (let row = startRow; row < startRow + 3; row += 1) {
      for (let column = startColumn; column < startColumn + 3; column += 1) {
        indexes.push(row * 9 + column);
      }
    }

    return indexes;
  }

  isBlockCompleted(board: SudokuBoard, blockIndex: number): boolean {
    const indexes = this.getBlockCellIndexes(blockIndex);
    return indexes.every((index) => board.cells[index].isCorrect);
  }

  getNewCompletedBlocks(board: SudokuBoard, alreadyCompletedBlocks: number[]): number[] {
    const result: number[] = [];

    for (let blockIndex = 0; blockIndex < 9; blockIndex += 1) {
      if (alreadyCompletedBlocks.includes(blockIndex)) {
        continue;
      }

      if (this.isBlockCompleted(board, blockIndex)) {
        result.push(blockIndex);
      }
    }

    return result;
  }
}
