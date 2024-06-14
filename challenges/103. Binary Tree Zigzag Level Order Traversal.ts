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

// Recursive solution
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const result: Array<Array<number>> = [];

    const helper = (node: TreeNode | null, level: number) => {
        if(!node) {
            return;
        }

        const current = result[level] || [];
        const isEven = level % 2 === 0;

        if(isEven) {
            current.push(node.val);
        } else {
            current.unshift(node.val);
        }

        result[level] = current;

        helper(node.left, level + 1);
        helper(node.right, level + 1);
    }

    helper(root, 0);
    
    return result;
};

// Iterative solution
// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//     if(!root) {
//         return [];
//     }
    
//     const result: Array<Array<number>> = [];
//     const queue: Array<TreeNode> = [root];
//     let isEven = false; 
    
//     while (queue.length) {
//         const length = queue.length;
//         const list: Array<number> = [];

//         for (let i = 0; i < length; i++) {
//             let node = queue.shift();

//             if(isEven) {
//                 list.unshift(node?.val || 0);
//             } else {
//                 list.push(node?.val || 0);
//             }

//             if(node?.left) {
//                 queue.push(node.left);
//             }

//             if(node?.right) {
//                 queue.push(node.right);
//             }
//         }

//         isEven = !isEven;
//         result.push(list);
//     }

//     return result;
// };

// First
const first = new TreeNode(1);
const second = new TreeNode(2);
const third = new TreeNode(3);
first.left = second;
first.right = third;

const fifth = new TreeNode(4);
second.left = fifth;

const eight = new TreeNode(5);
third.right = eight;

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

const result = zigzagLevelOrder(first);
console.log({ result });