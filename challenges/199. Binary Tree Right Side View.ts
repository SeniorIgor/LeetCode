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

function rightSideView(root: TreeNode | null): number[] {
    const result: Array<number> = [];

    const helper = (node: TreeNode | null, level: number) => {
        if(!node) {
            return;
        }
        
        if(result[level] === undefined) {
            result.push(node.val);
        }

        helper(node.right, level + 1);
        helper(node.left, level + 1);
    }

    helper(root, 0);

    return result;
};

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
first.left = second;
first.right = third;

const fifth = new TreeNode(5);
// const sixth = new TreeNode(4);
second.right = fifth;
// third.right = sixth;

// const seventh = new TreeNode(0);
// const eight = new TreeNode(8);
// third.left = seventh;
// third.right = eight;

// const ninth = new TreeNode(7);
// const tenth = new TreeNode(4);
// sixth.left = ninth;
// sixth.right = tenth;

const result = rightSideView(first);
console.log({ result });