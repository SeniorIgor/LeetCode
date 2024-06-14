// TODO: Solve again
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const map = new Map(inorder.map((item, idx) => [item, idx]));
    
    function helper(left: number, right: number) {
        if(left > right) {
            return null;
        }
        
        const root = new TreeNode(postorder.pop());
    
        const index = map.get(root.val) || 0;

        console.log('left', {left, right: index - 1 });
        console.log('right', {left: index + 1, right });
    
        // right first because of postorder Root -> Right
        root.right = helper(index + 1, right);
        root.left = helper(left, index - 1);
    
        return root;
    }

    return helper(0, inorder.length - 1);
};

// InOrder => Left, Root, Right
const inorder = [9,3,15,20,7];
// Post order => Left, Right, Root
const postorder = [9,15,7,20,3];
// PreOrder => Root, Left, Right

const result = buildTree(inorder, postorder);
console.log(result);