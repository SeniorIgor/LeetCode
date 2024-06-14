// TODO: Solve again
// TODO: Solve in both approaches DFS and BFS

// BFS
function numIslands(grid: string[][]): number {
    let count = 0
    const rows = grid.length;
    const columns = grid[0].length;
    const directions: Array<[number, number]> = [[0, 1], [1, 0], [-1, 0], [0, -1]];

    for(let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if(grid[i][j] === "0") {
                continue;
            }

            const queue: Array<[number, number]> = [];
            grid[i][j] = "0";
            queue.push([i, j]);
            count++;

            while(queue.length) {
                // BFS -> shift, iterative DFS -> pop
                const [row, column] = queue.shift() || [0, 0];

                for (let index = 0; index < directions.length; index++) {
                    const [rowShift, colShift] = directions[index];

                    const rowValue = rowShift + row; 
                    const colValue = colShift + column; 

                    if(rowValue < rows && rowValue >= 0 && colValue < columns && colValue >= 0 && grid[rowValue][colValue] === '1') {
                        grid[rowValue][colValue] = "0";
                        queue.push([rowValue, colValue]);
                    }
                }
            }
        }
    }

    return count;
}

// DFS
// function numIslands(grid: string[][]): number {
//     let count = 0
//     const rows = grid.length;
//     const columns = grid[0].length;

//     const dfs = (i: number, j: number) => {
//         if(grid[i][j] === '0') {
//             return;
//         }
        
//         grid[i][j] = "0";

//         if(i > 0) {
//             dfs(i - 1, j);
//         }

//         if(j > 0) {
//             dfs(i, j - 1);
//         }

//         if(i < rows - 1) {
//             dfs(i + 1, j);
//         }

//         if(j < columns - 1) {
//             dfs(i, j + 1);
//         }
//     }

//     for(let i = 0; i < rows; i++) {
//         for (let j = 0; j < columns; j++) {
//             if(grid[i][j] === "1") {
//                 count++;
//                 dfs(i ,j);
//             }
//         }
//     }

//     return count;
// }

const grid = [
    ['1', '1', '1', '1', '1', '0', '1', '1', '1', '1'],
    ['1', '0', '1', '0', '1', '1', '1', '1', '1', '1'],
    ['0', '1', '1', '1', '0', '1', '1', '1', '1', '1'],
    ['1', '1', '0', '1', '1', '0', '0', '0', '0', '1'],
    ['1', '0', '1', '0', '1', '0', '0', '1', '0', '1'],
    ['1', '0', '0', '1', '1', '1', '0', '1', '0', '0'],
    ['0', '0', '1', '0', '0', '1', '1', '1', '1', '0'],
    ['1', '0', '1', '1', '1', '0', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1', '1', '1', '1', '0', '1'],
    ['1', '0', '1', '1', '1', '1', '1', '1', '1', '0'],
  ];
  
const result = numIslands(grid);
console.log({ result });

console.log(grid);