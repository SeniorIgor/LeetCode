// TODO: Solve again
export function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let result = new Array<number>(m * n);
  let idx = 0;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result[idx++] = matrix[top][i];
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[idx++] = matrix[i][right];
    }
    right--;

    if (top > bottom || left > right) {
      break;
    }

    for (let i = right; i >= left; i--) {
      result[idx++] = matrix[bottom][i];
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      result[idx++] = matrix[i][left];
    }
    left++;
  }

  return result;
};

// Test Case #1 -> 
// const value = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]]
// Test Case #2 -> [7,9,6]
const value = [[7], [9], [6]];
const result = spiralOrder(value);
console.log(result);