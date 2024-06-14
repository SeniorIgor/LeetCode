function gameOfLife(board: number[][]): void {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const element = Math.floor(board[i][j]);
      const count = getNeighborsCount(board, i, j);

      if(element === 0 && count === 3) {
        board[i][j] = 0.1;
      } else if(element === 1 && (count > 3 || count < 2)) {        
        board[i][j] = 1.1;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const element = board[i][j];

      if(element === 0.1) {
        board[i][j] = 1;
      } else if(element === 1.1) {        
        board[i][j] = 0;
      }
    }
  }
};

function getNeighborsCount(board: number[][], row: number, column: number) {
  let count = 0;

  for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, board.length - 1); i++) {
    for (let j = Math.max(column - 1, 0); j <= Math.min(column + 1, board[0].length - 1); j++) {
      if(i !== row || j !== column) {
        count += Math.floor(board[i][j]);
      }
    }
  }

  return count;
}

const value = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
const result = gameOfLife(value);
console.log(result, value);


// 