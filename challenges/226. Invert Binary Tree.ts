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

function invertTree(root: TreeNode | null): TreeNode | null {
    if(!root) {
        return root;
    }
    
    const left = root.left;
    root.left = root.right;
    root.right = left;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};

const first = new TreeNode(4);
const second = new TreeNode(2);
const third = new TreeNode(7);
first.left = second;
first.right = third;

const fourth = new TreeNode(1);
const fifth = new TreeNode(3);
second.left = fourth;
second.right = fifth;

const sixth = new TreeNode(6);
const seventh = new TreeNode(9);
third.left = sixth;
third.right = seventh;

const result = invertTree(first);
console.log(result);