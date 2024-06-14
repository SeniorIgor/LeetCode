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

function maxDepth(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null) =>  {
        if(!node) {
            return 0;
        }
        
        return 1 + Math.max(dfs(node.left), dfs(node.right));
    }

    return dfs(root);
};

const first = new TreeNode(3);
const second = new TreeNode(9);
const third = new TreeNode(20);
first.left = second;
first.right = third;
const fourth = new TreeNode(15);
const fifth = new TreeNode(7);
third.left = fourth;
third.right = fifth;

const result = maxDepth(first);
console.log(result);