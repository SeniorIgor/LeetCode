// TODO: Solve again
function spiralOrder(matrix: number[][]): number[] {
  let top = 0;
  let left = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  const result: Array<number> = [];
  
  while(top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if(!(top <= bottom && left <= right)) {
      break;
    }

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }

  return result;
};

const value = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
const result = spiralOrder(value);
console.log(result);