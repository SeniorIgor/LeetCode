// TODO: Solve again
export function isValidSudoku(board: string[][]): boolean {
  const cols = Array.from({ length: 9 }, () => new Set<string>());
  const boxes = Array.from({ length: 9 }, () => new Set<string>());

  // Row
  for (let i = 0; i < 9; i++) {
    const row = new Set<string>();

    for (let j = 0; j < 9; j++) {
      const val = board[i][j];

      // Filter not numbers
      if (val === ".") {
        continue;
      }

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check repeated value
      if (row.has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      // Fill values
      row.add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};

// Test Case #1 -> true
// const value = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."]
//   , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
//   , [".", "9", "8", ".", ".", ".", ".", "6", "."]
//   , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
//   , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
//   , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
//   , [".", "6", ".", ".", ".", ".", "2", "8", "."]
//   , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
//   , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
// Test Case #2
const value = [
  [".", ".", "4", ".", ".", ".", "6", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", ".", "9", "."],
  [".", ".", ".", "5", "6", ".", ".", ".", "."],
  ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
  [".", ".", ".", "7", ".", ".", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."]];
const result = isValidSudoku(value);
console.log(result);