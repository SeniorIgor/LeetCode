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
function averageOfLevels(root: TreeNode | null): number[] {
    if(!root) {
        return [];
    }
    
    const queue: Array<TreeNode> = [root];
    const result: Array<number> = [];

    while(queue.length) {
        let sum = 0;
        const length = queue.length;
        
        for(let i = 0; i < length; i++) {
            const node = queue.shift();
            
            sum += node?.val || 0;
            
            if(node?.left) {
                queue.push(node.left);
            }

            if(node?.right) {
                queue.push(node.right);
            }
        }

        result.push(sum / length);
    }

    return result;
};

// Recursive solution
// function averageOfLevels(root: TreeNode | null): number[] {
//     const result: Array<number> = [];
//     const count: Array<number> = [];

//     const helper = (node: TreeNode | null, level: number) => {
//         if(!node) {
//             return null;
//         }

//         result[level] = (result[level] || 0) + node.val;
//         count[level] = (count[level] || 0) + 1;

//         helper(node.left, level + 1);
//         helper(node.right, level + 1);
//     }

//     helper(root, 0);

//     return result.map((item, idx) => item / count[idx]);
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

const result = averageOfLevels(first);
console.log({ result });