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
function isValidBST(root: TreeNode | null): boolean {
    const stack: Array<TreeNode> = [];
    let prevValue: number | null = null;

    while(root || stack.length) {        
        while(root) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop() || null; 

        if(!root) {
            return true;
        } 

        if(prevValue !== null && prevValue >= root.val) {
            return false;
        }

        prevValue = root.val;
        root = root.right;
    }

    return true;
};

// With min and max
// function isValidBST(root: TreeNode | null): boolean {
//     const helper = (node: TreeNode | null, minValue: number, maxValue: number) => {
//         if(!node) {
//             return true;
//         }

//         if(node.val <= minValue || node.val >= maxValue) {
//             return false;
//         }

//         return helper(node.left, minValue, node.val) && helper(node.right, node.val, maxValue);
//     }

//     return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
// };

// Recursive solution DFS
// function isValidBST(root: TreeNode | null): boolean {
//     let prevValue: number | null = null;

//     const dfs = (node: TreeNode | null) => {
//         if(!node) {
//             return true;
//         }

//         const left = dfs(node.left);
        
//         if(prevValue !== null && prevValue >= node.val) {
//             return false;
//         }

//         prevValue = node.val;

//         const right = dfs(node.right); 

//         return left && right;
//     }

//     return dfs(root);
// };

// First
const first = new TreeNode(0);
// const second = new TreeNode(1);
const third = new TreeNode(-1);
// first.left = second;
first.right = third;

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

const result = isValidBST(first);
console.log({ result });