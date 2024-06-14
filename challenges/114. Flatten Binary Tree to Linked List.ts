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

function flatten(root: TreeNode | null): void {
    let tail: TreeNode | null = null;

    const helper = (node: TreeNode | null) => {
        if(!node) {
            return;
        }
        
        helper(node.right);
        helper(node.left);
        
        node.left = null;
        node.right = tail;
        tail = node;
    }
    
    helper(root);
};

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(5);
first.left = second;
first.right = third;

const fourth = new TreeNode(3);
const fifth = new TreeNode(4);
second.left = fourth;
second.right = fifth;

const sixth = new TreeNode(6);
third.left = null;
third.right = sixth;

flatten(first);
console.log(first);