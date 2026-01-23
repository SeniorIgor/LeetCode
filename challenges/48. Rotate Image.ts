export function rotate(matrix: number[][]): void {
  const n = matrix.length;
  
  for(let row = 0; row < n; row++) {
    for (let column = row + 1; column < n; column++) {
      [matrix[row][column], matrix[column][row]] = [matrix[column][row], matrix[row][column]];
    }
  }

  for (let row = 0; row < n; row++) {
    matrix[row].reverse();
  }
};

// Test Case #1
const value = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
// Test Case #2
// const value = [[1,2,3],[4,5,6],[7,8,9]];
const result = rotate(value);
console.log(result, value);

// [1,2,3]
// [4,5,6]
// [7,8,9]

// [9,6,3]
// [8,5,2]
// [7,4,1]

// [7,4,1]
// [8,5,2]
// [9,6,3]

// Another Solution
// export function rotate(matrix: number[][]): void {
//   const rows = matrix.length - 1;
//   const columns = matrix[0].length - 1;
  
//   for(let row = 0; row < rows; row++) {
//     for (let column = 0; column < columns - row; column++) {
//       const item = matrix[row][column];
//       matrix[row][column] = matrix[rows - column][columns - row];
//       matrix[rows - column][columns - row] = item;
//     }
//   }

//   for (let row = 0; row <= Math.trunc(rows / 2); row++) {
//     for (let column = 0; column <= columns; column++) {
//       const item = matrix[row][column];
//       matrix[row][column] = matrix[rows - row][column];
//       matrix[rows - row][column] = item;
//     }    
//   }
// };