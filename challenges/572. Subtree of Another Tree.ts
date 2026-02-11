// TODO: Solve again
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sameTree(first: TreeNode | null, second: TreeNode | null) {
  if (!first || !second) {
    return first === second;
  } else if (first.val !== second.val) {
    return false;
  }

  return sameTree(first.left, second.left) && sameTree(first.right, second.right);
}

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) {
    return false;
  } else if (sameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

// Test Case #1 -> true
// const root12 = new TreeNode(2);
// const root11 = new TreeNode(1);
// const root1 = new TreeNode(4, root11, root12);
// const root2 = new TreeNode(5);
// const root = new TreeNode(3, root1, root2);

// const sub2 = new TreeNode(2);
// const sub1 = new TreeNode(1);
// const subRoot = new TreeNode(4, sub1, sub2);
// Test Case #2 -> false
// const root121 = new TreeNode(0);
// const root12 = new TreeNode(2, root121);
// const root11 = new TreeNode(1);
// const root1 = new TreeNode(4, root11, root12);
// const root2 = new TreeNode(5);
// const root = new TreeNode(3, root1, root2);

// const sub2 = new TreeNode(2);
// const sub1 = new TreeNode(1);
// const subRoot = new TreeNode(4, sub1, sub2);
// Test Case #3 -> false
const root1 = new TreeNode(1);
const root = new TreeNode(1, root1);

const subRoot = new TreeNode(1);

const result = isSubtree(root, subRoot);
console.log(result)