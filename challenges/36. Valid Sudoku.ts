// TODO: Solve again
function isValidSudoku(board: string[][]): boolean {
  let rowSets: Array<Set<string>> = [];
  let columnSets: Array<Set<string>> = [];
  let blockSets: Array<Set<string>> = [];

  for (let i = 0; i < board.length; i++) {
    rowSets[i] = new Set();    
    columnSets[i] = new Set();    
    blockSets[i] = new Set();    
  }
  
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const blockKey = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      
      if(board[i][j] !== ".") {
        const innerItem = board[i][j];

        if(rowSets[i].has(innerItem) || columnSets[j].has(innerItem) || blockSets[blockKey].has(innerItem)) {
          return false;
        } else {
          rowSets[i].add(innerItem);
          columnSets[j].add(innerItem);
          blockSets[blockKey].add(innerItem);
        }
      }
    }    
  }

  return true;
};

const value = [
  ["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
const result = isValidSudoku(value);
console.log(result);