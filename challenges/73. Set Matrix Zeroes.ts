// TODO: Solve again
export function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  let firstColHasZero = false;

  // First pass: mark rows and columns
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }

    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  // Second pass: apply zeroes (reverse order)
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    if (firstColHasZero) {
      matrix[i][0] = 0;
    }
  }
}


// Test Case #1
// const value = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
// Test Case #2
// const value = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
// Test Case #3
// const value = [[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]];
// Test Case #4
const value = [[-4, -2147483648, 6, -7, 0], [-8, 6, -8, -6, 0], [2147483647, 2, -9, -6, -10]];
const result = setZeroes(value);
console.log(result, value);