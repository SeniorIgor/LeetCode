// BFS
function solve(board: string[][]): void {
    const rows = board.length;
    const columns = board[0].length;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    const queue: Array<[number, number]> = [];

    for(let column = 0; column < columns; column++) {
        if(board[0][column] === 'O') {
            board[0][column] = 'Z';
            queue.push([0, column]);
        }

        if(board[rows - 1][column] === 'O') {
            board[rows - 1][column] = 'Z';
            queue.push([rows - 1, column]);
        }
    }

    for(let row = 1; row < rows - 1; row++) {
        if(board[row][0] === 'O') {
            board[row][0] = 'Z';
            queue.push([row, 0]);
        }

        if(board[row][columns - 1] === 'O') {
            board[row][columns - 1] = 'Z';
            queue.push([row, columns - 1]);
        }
    }

    while (queue.length) {
        const [rowIndex, colIndex] = queue.shift() || [0,0];

        for (let index = 0; index < directions.length; index++) {
            const [rowShift, colShift] = directions[index];

            const rowValue = rowIndex + rowShift;
            const colValue = colIndex + colShift;

            if(rowValue < rows && colValue < columns && rowValue >= 0 && colValue >= 0 && board[rowValue][colValue] === 'O') {
                board[rowValue][colValue] = 'Z';
                queue.push([rowValue, colValue]);
            }
        }
    }
        
    for(let row = 0; row < rows; row++) {
        for(let column = 0; column < columns; column++) {
            if(board[row][column] === 'O') {
                board[row][column] = 'X'; 
            }
            
            if(board[row][column] === 'Z') {
                board[row][column] = 'O';
            }
        }
    }
};

// DFS
// function solve(board: string[][]): void {
//     const rows = board.length;
//     const columns = board[0].length;

//     const dfs = (row: number, column: number) => {
//         if(board[row][column] === 'X' || board[row][column] === 'Z') {
//             return;
//         }

//         board[row][column] = 'Z';

//         if(row > 0) {
//             dfs(row - 1, column);
//         }
        
//         if(column > 0) {
//             dfs(row, column - 1);
//         }
        
//         if(row < rows - 1) {
//             dfs(row + 1, column);
//         }
        
//         if(column < columns - 1) {
//             dfs(row, column + 1);
//         }
//     }

//     for(let column = 0; column < columns; column++) {
//         if(board[0][column] === 'O') {
//             dfs(0, column);
//         }

//         if(board[rows - 1][column] === 'O') {
//             dfs(rows - 1, column);
//         }
//     }

//     for(let row = 1; row < rows - 1; row++) {
//         if(board[row][0] === 'O') {
//             dfs(row, 0);
//         }

//         if(board[row][columns - 1] === 'O') {
//             dfs(row, columns - 1);
//         }
//     }
        
//     for(let row = 0; row < rows; row++) {
//         for(let column = 0; column < columns; column++) {
//             if(board[row][column] === 'O') {
//                 board[row][column] = 'X'; 
//             }
            
//             if(board[row][column] === 'Z') {
//                 board[row][column] = 'O';
//             }
//         }
//     }
// };

const grid = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
  
const result = solve(grid);
console.log({ result });
console.log(grid);