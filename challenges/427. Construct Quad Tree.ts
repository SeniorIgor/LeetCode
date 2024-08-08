class _Node {
    val: boolean
    isLeaf: boolean
    topLeft: _Node | null
	topRight: _Node | null
	bottomLeft: _Node | null
	bottomRight: _Node | null
	constructor(val?: boolean, isLeaf?: boolean, topLeft?: _Node, topRight?: _Node, bottomLeft?: _Node, bottomRight?: _Node) {
        this.val = (val===undefined ? false : val)
        this.isLeaf = (isLeaf===undefined ? false : isLeaf)
        this.topLeft = (topLeft===undefined ? null : topLeft)
        this.topRight = (topRight===undefined ? null : topRight)
        this.bottomLeft = (bottomLeft===undefined ? null : bottomLeft)
        this.bottomRight = (bottomRight===undefined ? null : bottomRight)
  }
}

// Time Complexity: O(n^2 * log(n))
// Space Complexity: O(n^2)
function construct(grid: number[][]): _Node | null {
  const checkSquare = (startRow: number, startColumn: number, endRow: number, endColumn: number): _Node => {
    if(endRow - startRow <= 1 && endColumn - startColumn <= 1) {
      return new _Node(!!grid[startRow][startColumn], true);
    }
    
    const rowHalf = Math.trunc((endRow - startRow) / 2);
    const columnHalf = Math.trunc((endColumn - startColumn) / 2);
    
    const topLeft = checkSquare(startRow, startColumn, startRow + rowHalf, startColumn + columnHalf);
    const topRight = checkSquare(startRow, startColumn + columnHalf, startRow + rowHalf, endColumn);
    const bottomLeft = checkSquare(startRow + rowHalf, startColumn, endRow, startColumn + columnHalf);
    const bottomRight = checkSquare(startRow + rowHalf, startColumn + columnHalf, endRow, endColumn);

    const areAllLeaves = topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf;
    const areEqualValues = topLeft.val === topRight.val && topRight.val === bottomLeft.val && bottomLeft.val === bottomRight.val;

    if(areAllLeaves && areEqualValues) {
      return new _Node(topLeft.val, true);
    } else {
      return new _Node(topLeft.val, false, topLeft, topRight, bottomLeft, bottomRight);
    }
  }

  return checkSquare(0, 0, grid.length, grid[0].length);
};

const grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]];

const result = construct(grid);
console.log({ result: JSON.stringify(result, null, 4) });