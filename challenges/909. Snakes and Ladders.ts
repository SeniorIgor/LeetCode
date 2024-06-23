// TODO: Solve again
// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
// BFS (Siple Solution)
function snakesAndLadders(board: number[][]): number {
  const moves = [-1];
  const n = board.length;
  const totalSquares = n * n;

  for (let row = n - 1; row >= 0; row--) {
    for (let column = 0; column < n; column++) {
      const isEven = (n - row) % 2 === 0;
      const currentColumn = isEven ? n - column - 1 : column;

      const item = board[row][currentColumn];

      moves.push(item);
    }
  }

  const queue: Array<[number, number]> = [[1, 0]];
  const visited = new Set([1]);

  while(queue.length) {
    let [position, steps] = queue.shift() || [0,0];

    for (let i = 1; i <= 6; i++) {
      let next = position + i;

      if(next > totalSquares) {
        break;
      }

      if(moves[next] !== -1) {
        next = moves[next];
      }

      if(next === totalSquares) {
        return steps + 1;
      }

      if(!visited?.has(next)) {
        visited?.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
};

// Time Complexity: O(n^2)
// Space Complexity: O(n^2)
// BFS (Top Solution)
// function snakesAndLadders(board: number[][]): number {
//     const moves = new Map();
//     const n = board.length;
//     const totalSquares = n * n;

//     const getCellNumber = (row: number, column: number) => {
//       const calcRow = n - row - 1;
//       const calcColumn = column + 1;
//       const isEven = calcRow % 2 === 0;

//       let result = calcRow * n;
      
//       if(isEven) {
//         result += calcColumn;
//       } else {
//         result += (n - column);
//       }
      
//       return result;
//     }

//     for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[i].length; j++) {
//         const item = board[i][j];
        
//         if(item > 0) {
//           moves.set(getCellNumber(i, j), item);
//         }
//       }
//     }

//     const queue: Array<[number, number]> = [[1, 0]];
//     const visited = new Set();

//     while(queue.length) {
//       let [position, steps] = queue.shift() || [0,0];

//       const maxStep = Math.min(totalSquares - position, 6);      
//       let endStep = position;

//       for (let i = 1; i <= maxStep; i++) {
//         const next = position + i;
//         const move = moves.get(next);

//         if(visited?.has(next)) {
//           continue;
//         }

//         if(move === undefined) {
//           endStep = position + i;
//           continue;
//         }

//         if(move < totalSquares) {
//           queue.push([move, steps + 1]);
//         } else if(move === totalSquares) {
//           return steps + 1;
//         }

//         visited?.add(next);
//       }

//       if(endStep === totalSquares) {
//         return steps + 1;
//       }

//       if(endStep !== position) {
//         queue.push([endStep, steps + 1]);
//       }
//     }

//     return -1;
// };

const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]];

const result = snakesAndLadders(board);
console.log({ result })
