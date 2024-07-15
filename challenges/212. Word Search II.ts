// TODO: Solve again
type Store = {
    children: Array<Store>;
    word?: string;
}

function findWords(board: string[][], words: string[]): string[] {
    const store: Store = { children: new Array(26) };
    const result: Array<string> = [];
    const rows = board.length;
    const columns = board[0]?.length;

    for(const word of words) {
        let node = store;

        for(let i = 0; i < word.length; i++) {
            const letter = word[i];
            const charCode = letter.charCodeAt(0); 

            if(!node.children[charCode]) {
                node.children[charCode] = { children: new Array(26) };
            }

            node = node.children[charCode] || {} as Store;
        }

        node.word = word;
    }

    const dfs = (row: number, column: number, node: Store) => {
        const letter = board[row][column];
        const charCode = letter.charCodeAt(0);

        if(!node.children[charCode]) {
            return false;
        }

        board[row][column] = '#';

        const currentNode = node.children[charCode] || {} as Store;

        if(currentNode.word) {
            result.push(currentNode.word);
            currentNode.word = undefined;
        }

        if(row + 1 < rows && board[row + 1][column] !== '#') {
            dfs(row + 1, column, currentNode);
        }

        if(row - 1 >= 0 && board[row - 1][column] !== '#') {
            dfs(row - 1, column, currentNode);
        }

        if(column + 1 < columns && board[row][column + 1] !== '#') {
            dfs(row, column + 1, currentNode);
        }

        if(column - 1 >= 0 && board[row][column - 1] !== '#') {
            dfs(row, column - 1, currentNode);
        }

        board[row][column] = letter;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            dfs(i, j, store);
        }
    }

    return result;
};

// type Store = {
//     children: Map<string, Store>;
//     word?: string;
// }

// function findWords(board: string[][], words: string[]): string[] {
//     const store: Store = { children: new Map() };
//     const result: Array<string> = [];
//     const rows = board.length;
//     const columns = board[0]?.length;

//     for(const word of words) {
//         let node = store;

//         for(let i = 0; i < word.length; i++) {
//             const letter = word[i];

//             if(!node.children.has(letter)) {
//                 node.children.set(letter, { children: new Map() })
//             }

//             node = node.children.get(letter) || {} as Store;
//         }

//         node.word = word;
//     }

//     const dfs = (row: number, column: number, node: Store) => {
//         const letter = board[row][column];

//         if(!node.children.has(letter)) {
//             return false;
//         }

//         board[row][column] = '#';

//         const currentNode = node.children.get(letter) || {} as Store;

//         if(currentNode.word) {
//             result.push(currentNode.word);
//             currentNode.word = undefined;
//         }

//         if(row + 1 < rows && board[row + 1][column] !== '#') {
//             dfs(row + 1, column, currentNode);
//         }

//         if(row - 1 >= 0 && board[row - 1][column] !== '#') {
//             dfs(row - 1, column, currentNode);
//         }

//         if(column + 1 < columns && board[row][column + 1] !== '#') {
//             dfs(row, column + 1, currentNode);
//         }

//         if(column - 1 >= 0 && board[row][column - 1] !== '#') {
//             dfs(row, column - 1, currentNode);
//         }

//         board[row][column] = letter;
//     }

//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < columns; j++) {
//             dfs(i, j, store);
//         }
//     }

//     return result;
// };

// const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
// const words = ["oath","pea","eat","rain"];
const board = [["a","b","c"],["a","e","d"],["a","f","g"]];
const words = ["abcdefg","gfedcbaaa","eaabcdgfa","befa","dgc","ade"];
const result = findWords(board, words);
console.log({ result });
