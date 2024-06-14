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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if(!p && !q) {
        return true;
    }

    if(!p || !q) {
        return false;
    }

    if(p.val !== q.val) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
first.left = second;
first.right = third;

const fourth = new TreeNode(1);
const fifth = new TreeNode(2);
const sixth = new TreeNode(3);
fourth.left = fifth;
fourth.right = sixth;

const result = isSameTree(first, fourth);
console.log(result);