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

// Iterative solution
function kthSmallest(root: TreeNode | null, k: number): number {
    const stack: Array<TreeNode> = [];

    while(k !== 0) {
        while(root !== null) {
            stack.push(root);
            root = root.left;
        }
        
        root = stack.pop() || null;

        k--;

        if(k === 0 && root) {
            return root.val;
        }

        root = root?.right || null;
    }

    return -1;
};

// Recursive solution
// function kthSmallest(root: TreeNode | null, k: number): number {
//     let result = root?.val || 0;

//     const dfs = (node: TreeNode | null) => {
//         if(!node) {
//             return;
//         }

//         dfs(node.left);

//         k--;
//         if(k === 0) {
//             result = node.val;
//             return;
//         }

//         dfs(node.right);
//     }

//     dfs(root);

//     return result;
// };

// First
const first = new TreeNode(31);
const second = new TreeNode(30);
const third = new TreeNode(48);
first.left = second;
first.right = third;

const fifth = new TreeNode(3);
// const sixth = new TreeNode(2);
second.left = fifth;
// second.right = sixth;

const sixth = new TreeNode(0);
// const sixth = new TreeNode(2);
fifth.left = sixth;
// second.right = sixth;

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

const result = kthSmallest(first, 1);
console.log({ result });