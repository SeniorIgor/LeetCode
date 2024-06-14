// TODO: Solve again
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    next: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null, next?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
        this.next = (next===undefined ? null : next);
    }
}

function getMinimumDifference(root: TreeNode | null): number {
    let prevValue: number | null = null;
    let result = Number.MAX_SAFE_INTEGER;

    const dfs = (node: TreeNode | null) => {
        if(!node) {
            return;
        }

        dfs(node.left);
        if(prevValue !== null) {
            result = Math.min(result, Math.abs(prevValue - node.val));
        }
        prevValue = node.val;
        dfs(node.right);
    }

    dfs(root);

    return result;
};

// First
const first = new TreeNode(0);
// const second = new TreeNode(2);
const third = new TreeNode(2236);
// first.left = second;
first.right = third;

const fifth = new TreeNode(1277);
const sixth = new TreeNode(2776);
third.left = fifth;
third.right = sixth;

const seventh = new TreeNode(519);
fifth.left = seventh;

// Second
// const first = new TreeNode(3);
// const second = new TreeNode(9);
// const third = new TreeNode(20);
// first.left = second;
// first.right = third;

// const fifth = new TreeNode(15);
// const sixth = new TreeNode(7);
// third.left = fifth;
// third.right = sixth;

// const seventh = new TreeNode(0);
// const eight = new TreeNode(8);
// third.left = seventh;
// third.right = eight;

// const ninth = new TreeNode(7);
// const tenth = new TreeNode(4);
// sixth.left = ninth;
// sixth.right = tenth;

const result = getMinimumDifference(first);
console.log({ result });