class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


// Time Complexity: O(n)
// Space Complexity: O(n)
function sortedArrayToBST(nums: number[], start: number = 0, end: number = nums.length): TreeNode | null {
    if(start >= end) {
        return null;
    }
    
    const number = Math.trunc((end - start) / 2);

    return new TreeNode(
        nums[start + number], 
        sortedArrayToBST(nums, start, start + number), 
        sortedArrayToBST(nums, start + number + 1, end)
    );
};

const nums = [-10,-3,0,5,9];
const result = sortedArrayToBST(nums);
console.log({ result: JSON.stringify(result, null, 4), rawResult: result });