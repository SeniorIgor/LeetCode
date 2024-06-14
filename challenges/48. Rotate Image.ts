function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix[0].length; i++) {
    let start = 0;
    let end = matrix.length - 1;
    
    while (start < end) {
      const temp = matrix[start][i];
      matrix[start][i] = matrix[end][i];
      matrix[end][i] = temp; 

      start++;
      end--;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};

const value = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
const result = rotate(value);
console.log(result, value);
