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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function helper(preStart: number, inStart: number, count: number): TreeNode | null {
        if(count <= 0 || preStart >= preorder.length || inStart >= inorder.length) {
            return null;
        }
        
        const root = new TreeNode(preorder[preStart++]); 
        
        let amount = 0;
    
        while (inStart + amount < inStart + count && inorder[inStart + amount] !== root.val) {
            amount++;
        }
    
        root.left = helper(preStart, inStart, amount);
        root.right = helper(preStart + amount, inStart + amount + 1, count - amount - 1);
    
        return root;
    }

    return helper(0, 0, preorder.length);
};

// PreOrder => Root, Left, Right
const preOrder = [3,9,20,15,7];
// InOrder => Left, Root, Right
const inOrder = [9,3,15,20,7];
// Post order => Left, Right, Root

const result = buildTree(preOrder, inOrder);
console.log(result);