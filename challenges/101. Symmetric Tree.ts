// TODO: Solve again iterative version 

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

// Iterative solution
function isSymmetric(root: TreeNode | null): boolean {
    if(!root) {
        return true;
    }

    const queue: Array<TreeNode | null> = [];
    queue.push(root.left, root.right);

    while(queue.length) {
        const left = queue.shift() || null;
        const right = queue.shift() || null;

        if(!left && !right) {
            continue;
        }

        if(!left || !right || left.val !== right.val) {
            return false;
        }
    
        queue.push(left.right, right.left, left.left, right.right);
    }

    return true;
};

// Recursive solution
// function compare(left: TreeNode | null, right: TreeNode | null) {
//     if(!left && !right) {
//         return true;
//     }

//     if(!left || !right) {
//         return false;
//     }

//     if(left.val !== right.val) {
//         return false;
//     }

//     return compare(left.left, right.right) && compare(left.right, right.left);
// }

// function isSymmetric(root: TreeNode | null): boolean {
//     if(!root) {
//         return true;
//     }

//     return compare(root.left, root.right);
// };

const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(2);
first.left = second;
first.right = third;

const fourth = new TreeNode(3);
const fifth = new TreeNode(4);
second.left = fourth;
second.right = fifth;

const sixth = new TreeNode(4);
const seventh = new TreeNode(1);
third.left = sixth;
third.right = seventh;

const result = isSymmetric(first);
console.log(result);