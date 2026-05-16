import type { ActiveEffect } from "../models/Ability";
import type { Cell } from "../models/Cell";
import type { SudokuBoard } from "../models/Sudoku";

export class SudokuBoardView {
  render(
    board: SudokuBoard,
    selectedCellIndex: number | null,
    _effects: ActiveEffect[] = [],
  ): string {
    const selectedCell =
      selectedCellIndex !== null ? board.cells[selectedCellIndex] : null;

    return `
      <div class="sudoku-board">
        ${board.cells
          .map((cell) => this.renderCell(cell, selectedCell, selectedCellIndex))
          .join("")}
      </div>
    `;
  }

  private renderCell(
    cell: Cell,
    selectedCell: Cell | null,
    selectedCellIndex: number | null,
  ): string {
    const classes = ["sudoku-cell"];

    if (cell.isGiven) {
      classes.push("sudoku-cell--given");
    }

    if (cell.isCorrect) {
      classes.push("sudoku-cell--correct");
    }

    if (cell.isWrong) {
      classes.push("sudoku-cell--wrong");
    }

    if (selectedCellIndex === cell.index) {
      classes.push("sudoku-cell--selected");
    }

    if (selectedCell && selectedCell.index !== cell.index) {
      const sameRow = selectedCell.row === cell.row;
      const sameColumn = selectedCell.column === cell.column;
      const sameBlock = selectedCell.block === cell.block;
      const selectedValue = selectedCell.currentValue ?? selectedCell.givenValue;
      const cellValue = cell.currentValue ?? cell.givenValue;
      const sameValue =
        selectedValue !== null &&
        cellValue !== null &&
        selectedValue === cellValue;

      if (sameRow || sameColumn) {
        classes.push("sudoku-cell--related-line");
      }

      if (sameBlock) {
        classes.push("sudoku-cell--related-block");
      }

      if (sameValue) {
        classes.push("sudoku-cell--same-value");
      }
    }

    if (cell.column === 2 || cell.column === 5) {
      classes.push("sudoku-cell--border-right-heavy");
    }

    if (cell.row === 2 || cell.row === 5) {
      classes.push("sudoku-cell--border-bottom-heavy");
    }

    if (cell.column === 0) {
      classes.push("sudoku-cell--border-left-heavy");
    }

    if (cell.row === 0) {
      classes.push("sudoku-cell--border-top-heavy");
    }

    const value = cell.currentValue ?? cell.givenValue;

    return `
      <button type="button" class="${classes.join(" ")}" data-cell-index="${cell.index}">
        ${
          value
            ? `<span class="sudoku-cell__value">${value}</span>`
            : this.renderNotes(cell.notes)
        }
      </button>
    `;
  }

  private renderNotes(notes: number[]): string {
    return `
      <div class="sudoku-cell__notes">
        ${Array.from({ length: 9 }, (_, index) => {
          const noteValue = index + 1;

          return `
            <span class="sudoku-cell__note">
              ${notes.includes(noteValue) ? noteValue : ""}
            </span>
          `;
        }).join("")}
      </div>
    `;
  }
}
