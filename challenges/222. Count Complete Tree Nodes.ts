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

// O(log(n)^2)
function countNodes(root: TreeNode | null): number {   
    if(!root) {
        return 0;
    }

    const calculateHeight = (node: TreeNode | null) => {
        if(!node) {
            return 0;
        }

        const height = calculateHeight(node.left);

        return height + 1;
    }

    let height = calculateHeight(root);
    let sum = 0;

    while(root) {
        if(calculateHeight(root.right) === height - 1) {
            sum += Math.pow(2, height - 1);
            root = root?.right;
        } else {
            sum += Math.pow(2, height - 2);
            root = root?.left;
        }

        height--;
    }

    return sum;
};

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
first.left = second;
first.right = third;

const fifth = new TreeNode(4);
const sixth = new TreeNode(5);
second.left = fifth;
second.right = sixth;

const seventh = new TreeNode(6);
// const eight = new TreeNode(4);
third.left = seventh;
// third.right = eight;

const result = countNodes(first);
console.log({ result });