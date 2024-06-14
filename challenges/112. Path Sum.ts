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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const helper = (root: TreeNode | null, sum: number) => {
        if(!root) {
            return false;
        }

        sum += root.val;

        if(!root.left && !root.right) {
            return sum === targetSum;
        }

        return helper(root.left, sum) || helper(root.right, sum);
    }

    return helper(root, 0);
};

const first = new TreeNode(5);
const second = new TreeNode(4);
const third = new TreeNode(8);
first.left = second;
first.right = third;

const fourth = new TreeNode(11);
second.left = fourth;

const fifth = new TreeNode(7);
const sixth = new TreeNode(2);
fourth.left = fifth;
fourth.right = sixth;

const seventh = new TreeNode(13);
const eight = new TreeNode(4);
third.left = seventh;
third.right = eight;

const targetSum = 22;
const result = hasPathSum(first, targetSum);
console.log(result);