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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if(!root || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) {
        return root;
    }

    return left || right;
};

const first = new TreeNode(1);
const second = new TreeNode(2);
// const third = new TreeNode(1);
first.left = second;
// first.right = third;

// Second case
// const first = new TreeNode(3);
// const second = new TreeNode(5);
// const third = new TreeNode(1);
// first.left = second;
// first.right = third;

// const fifth = new TreeNode(6);
// const sixth = new TreeNode(2);
// second.left = fifth;
// second.right = sixth;

// const seventh = new TreeNode(0);
// const eight = new TreeNode(8);
// third.left = seventh;
// third.right = eight;

// const ninth = new TreeNode(7);
// const tenth = new TreeNode(4);
// sixth.left = ninth;
// sixth.right = tenth;

const result = lowestCommonAncestor(first, first, second);
console.log({ result: result?.val });