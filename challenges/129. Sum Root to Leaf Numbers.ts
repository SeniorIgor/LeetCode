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

const helper = (node: TreeNode | null, sum: number) => {
    if(!node) {
        return 0;
    }

    sum = sum * 10 + node.val;

    if(!node.right && !node.left) {
        return sum;
    }

    return helper(node.left, sum) + helper(node.right, sum);
}

function sumNumbers(root: TreeNode | null): number {
    return helper(root, 0);
};

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
first.left = second;
first.right = third;

// const fourth = new TreeNode(11);
// second.left = fourth;

// const fifth = new TreeNode(7);
// const sixth = new TreeNode(2);
// fourth.left = fifth;
// fourth.right = sixth;

// const seventh = new TreeNode(13);
// const eight = new TreeNode(4);
// third.left = seventh;
// third.right = eight;

const result = sumNumbers(first);
console.log(result);