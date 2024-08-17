// TODO: Solve again
function searchMatrix(matrix: number[][], target: number): boolean {
  const rows = matrix.length;
  const columns = matrix[0].length;
  let start = 0;
  let end = rows * columns - 1;
  
  while(start <= end) {
    const middle = Math.trunc((start + end) / 2);

    const row = Math.trunc(middle / columns);
    const column = middle % columns;
    
    const value = matrix[row][column];
    
    if(value === target) {
      return true;
    } else if(target > value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  
  return false
};

// function searchMatrix(matrix: number[][], target: number): boolean { 
//   const rows = matrix.length;
//   const columns = matrix[0].length;

//   let start = 0;
//   let end = rows - 1;
//   let row = -1;

//   while (start <= end) {
//     const middle = Math.trunc((end + start) / 2);
    
//     const first = matrix[middle][0];
//     const last = matrix[middle][columns - 1];
    
//     if(first === target || last === target) {
//       return true;
//     } else if(first < target && target < last) {
//       row = middle;
//       break;
//     } else if(target < first) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   if(row === -1) {
//     row = 0;
//   }

//   start = 0;
//   end = columns - 1;

//   while (start <= end) {
//     const middle = Math.trunc((end + start) / 2);

//     const value = matrix[row][middle];
    
//     if(value === target) {
//       return true;
//     } else if(target < value) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }

//   return false;
// };

const matrix = [[1]];
const target = 0;
const result = searchMatrix(matrix, target);
console.log({ result });