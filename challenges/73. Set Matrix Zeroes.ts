// TODO: Solve again
function setZeroes(matrix: number[][]): void {
  let m = matrix.length;
  let n = matrix[0].length;
  let isColumnCell = false;
  
  for (let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      isColumnCell = true;
    }

    for (let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    } 
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j > 0; j--) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }

    if(isColumnCell) {
      matrix[i][0] = 0;
    }
  }
};

const value = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
const result = setZeroes(value);
console.log(result, value);