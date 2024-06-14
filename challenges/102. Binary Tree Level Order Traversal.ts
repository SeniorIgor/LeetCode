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
function levelOrder(root: TreeNode | null): number[][] {
    const result: Array<Array<number>> = [];

    const helper = (node: TreeNode | null, level: number) => {
        if(!node) {
            return null;
        }

        const list = result[level] || [];
        list.push(node.val);

        result[level] = list;

        helper(node.left, level + 1);
        helper(node.right, level + 1);
    }

    helper(root, 0);

    return result;
};

// Iterative solution
// function levelOrder(root: TreeNode | null): number[][] {
//     if(!root) {
//         return [];
//     }
    
//     const result: Array<Array<number>> = [];
//     const queue: Array<TreeNode> = [root];

//     while (queue.length) {
//         const list: Array<number> = [];
//         const length = queue.length; 

//         for(let i = 0; i < length; i++) {
//             const current = queue.shift();
//             list.push(current?.val || 0);

//             if(current?.left) {
//                 queue.push(current.left);
//             }

//             if(current?.right) {
//                 queue.push(current.right);
//             }
//         }

//         result.push(list);
//     }

//     return result;
// };

const first = new TreeNode(3);
const second = new TreeNode(9);
const third = new TreeNode(20);
first.left = second;
first.right = third;

const fifth = new TreeNode(15);
const sixth = new TreeNode(7);
third.left = fifth;
third.right = sixth;

// const seventh = new TreeNode(0);
// const eight = new TreeNode(8);
// third.left = seventh;
// third.right = eight;

// const ninth = new TreeNode(7);
// const tenth = new TreeNode(4);
// sixth.left = ninth;
// sixth.right = tenth;

const result = levelOrder(first);
console.log({ result });