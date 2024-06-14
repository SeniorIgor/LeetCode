// TODO: Solve again
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

function maxPathSum(root: TreeNode | null): number {
    let max = Number.MIN_SAFE_INTEGER;

    const helper = (node: TreeNode | null) => {
        if(!node) {
            return 0;
        }
        
        const left = helper(node.left);
        const right = helper(node.right);

        const nextValue = Math.max(left, right, 0) + node.val;
        
        max = Math.max(max, nextValue, left + right + node.val);

        return nextValue;
    }

    helper(root);
    
    return max;
};


// left + right + root -> max
// right -> max
// left -> max

const first = new TreeNode(-10);
const second = new TreeNode(9);
const third = new TreeNode(20);
first.left = second;
first.right = third;

const fifth = new TreeNode(15);
const sixth = new TreeNode(7);
third.left = fifth;
third.right = sixth;

// const seventh = new TreeNode(13);
// const eight = new TreeNode(4);
// third.left = seventh;
// third.right = eight;

const result = maxPathSum(first);
console.log(result);