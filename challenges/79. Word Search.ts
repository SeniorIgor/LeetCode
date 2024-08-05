// Time Complexity: O(m * n * 4^l);
// Space Complexity: O(l);
// m - the number of rows
// n - the number of columns
// l - the number of letters
function exist(board: string[][], word: string): boolean {
    let result = false;

    const backtrack = (row: number, column: number, index: number) => {
        const boardLetter = board[row][column];

        if(index === word.length - 1) {
            result = true;
            return true;
        }

        board[row][column] = '';

        if(row + 1 < board.length && board[row + 1][column] === word[index + 1]) {
            backtrack(row + 1, column, index + 1);
        }

        if(row - 1 >= 0 && board[row - 1][column] === word[index + 1]) {
            backtrack(row - 1, column, index + 1);
        }

        if(column + 1 < board[0].length && board[row][column + 1] === word[index + 1]) {
            backtrack(row, column + 1, index + 1);
        }

        if(column - 1 >= 0 && board[row][column - 1] === word[index + 1]) {
            backtrack(row, column - 1, index + 1);
        }

        board[row][column] = boardLetter;
    }

    for(let row = 0; row < board.length; row++) {
        for(let column = 0; column < board[0].length; column++) {
            if(board[row][column] === word[0]) {
                backtrack(row, column, 0);
            }
        }
    }

    return result;
};

const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]; 
const word = "SEE";
const result = exist(board, word);
console.log({ result });