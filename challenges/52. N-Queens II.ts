// TODO: Solve again
// Time complexity: n! (because we try to put queens only on the first row)
// Space complexity: n
function totalNQueens(n: number): number {
  let count = 0;
  const sums = new Set();
  const differences = new Set();
  const columns = new Set();

  const backtrack = (row: number) => {
    if(row === n) {
      count++;
      return;
    }
    
    for (let column = 0; column < n; column++) {
      const difference = row - column;
      const sum = row + column;

      if(sums.has(sum) || differences.has(difference) || columns.has(column)) {
        continue;
      }
      
      columns.add(column);
      differences.add(difference);
      sums.add(sum);

      backtrack(row + 1);
      
      columns.delete(column);
      differences.delete(difference);
      sums.delete(sum);
    } 
  }

  backtrack(0);

  return count;
};

const n = 4;
const result = totalNQueens(n);
console.log({ result });
