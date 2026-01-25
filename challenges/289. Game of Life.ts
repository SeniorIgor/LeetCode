// n - neighbors
// Live Cells (1)
// n < 2 live cells (1)       -> 0
// 2 <= n <= 3 live cells (1) -> 1 (does not change the state)
// n > 3 live cells (1)       -> 0
// Not live Cells (0)
// n === 3 live cells (1)     -> 1
export function gameOfLife(board: number[][]): void {
  const rows = board.length;
  const cols = board[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const val = board[i][j];
      const lives = countLiveNeighbors(board, i, j, rows - 1, cols - 1)

      if (val === 1 && (lives < 2 || lives > 3)) {
        board[i][j] = 1.01;
      } else if (val === 0 && lives === 3) {
        board[i][j] = 0.1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const val = board[i][j];

      if (val === 1.01) {
        board[i][j] = 0;
      } else if (val === 0.1) {
        board[i][j] = 1;
      }
    }
  }
};

function countLiveNeighbors(board: number[][], row: number, col: number, rows: number, cols: number) {
  let neighbors = 0;

  neighbors += (row > 0 && col > 0) ? Math.trunc(board[row - 1][col - 1]) : 0;
  neighbors += row > 0 ? Math.trunc(board[row - 1][col]) : 0;
  neighbors += col > 0 ? Math.trunc(board[row][col - 1]) : 0;
  neighbors += (row < rows && col < cols) ? Math.trunc(board[row + 1][col + 1]) : 0;
  neighbors += row < rows ? Math.trunc(board[row + 1][col]) : 0;
  neighbors += col < cols ? Math.trunc(board[row][col + 1]) : 0;
  neighbors += row < rows && col > 0 ? Math.trunc(board[row + 1][col - 1]) : 0;
  neighbors += row > 0 && col < cols ? Math.trunc(board[row - 1][col + 1]) : 0;

  return neighbors;
}

const value = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
const result = gameOfLife(value);
console.log(result, value);

// Another Solution # 1
// function gameOfLife(board: number[][]): void {
//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       const element = Math.floor(board[i][j]);
//       const count = getNeighborsCount(board, i, j);

//       if(element === 0 && count === 3) {
//         board[i][j] = 0.1;
//       } else if(element === 1 && (count > 3 || count < 2)) {        
//         board[i][j] = 1.1;
//       }
//     }
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[i].length; j++) {
//       const element = board[i][j];

//       if(element === 0.1) {
//         board[i][j] = 1;
//       } else if(element === 1.1) {        
//         board[i][j] = 0;
//       }
//     }
//   }
// };

// function getNeighborsCount(board: number[][], row: number, column: number) {
//   let count = 0;

//   for (let i = Math.max(row - 1, 0); i <= Math.min(row + 1, board.length - 1); i++) {
//     for (let j = Math.max(column - 1, 0); j <= Math.min(column + 1, board[0].length - 1); j++) {
//       if(i !== row || j !== column) {
//         count += Math.floor(board[i][j]);
//       }
//     }
//   }

//   return count;
// }

// Another Solution #2
// export function gameOfLife(board: number[][]): void {
//   const rows = board.length;
//   const cols = board[0].length;

//   const directions = [
//     [-1, -1], [-1, 0], [-1, 1],
//     [0, -1], [0, 1],
//     [1, -1], [1, 0], [1, 1],
//   ]

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       let liveNeighbors = 0;

//       for (const [dx, dy] of directions) {
//         const x = i + dx;
//         const y = j + dy;

//         if (x >= 0 && x < rows && y >= 0 && y < cols && board[x][y] % 2 === 1) {
//           liveNeighbors++;
//         }
//       }

//       if (board[i][j] === 1 && (liveNeighbors === 2 || liveNeighbors === 3)) {
//         board[i][j] = 3; // 1 -> 1
//       } else if (board[i][j] === 0 && liveNeighbors === 3) {
//         board[i][j] = 2; // 0 -> 1
//       }
//     }
//   }

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < cols; j++) {
//       const val = Math.floor(board[i][j] / 2);

//       board[i][j] = val;
//     }
//   }
// };
// Explanation
// Current	Next	        Encode as
// 0 → 0	  dead → dead	  0
// 1 → 0	  live → dead	  1
// 0 → 1	  dead → live	  2
// 1 → 1	  live → live	  3
// Key idea:
// state % 2 → original state
// Math.floor(state / 2) → next state