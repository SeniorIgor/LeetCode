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

class BSTIterator {
    stack: Array<TreeNode>;
    
    constructor(root: TreeNode | null) {
        this.stack = [];
        this.pushAll(root);
    }

    next(): number {
        const root = this.stack.pop();

        if(root?.right) {
            this.pushAll(root.right);
        }

        return root?.val || 0;
    }

    hasNext(): boolean {
        return this.stack.length > 0;
    }

    pushAll(root: TreeNode | null) {
        while(root) {
            this.stack.push(root);
            root = root.left;
        }
    }
}

// In-order
// left -> root -> right
const first = new TreeNode(3);
const second = new TreeNode(1);
const third = new TreeNode(4);
first.left = second;
first.right = third;

// const fifth = new TreeNode();
const sixth = new TreeNode(2);
// third.left = fifth;
second.right = sixth;

// const seventh = new TreeNode(13);
// const eight = new TreeNode(4);
// third.left = seventh;
// third.right = eight;

const iterator = new BSTIterator(first);
console.log(iterator.hasNext()); // return True
console.log(iterator.next());    // return 3
console.log(iterator.hasNext()); // return True
console.log(iterator.next());    // return 3
console.log(iterator.hasNext()); // return True
console.log(iterator.next());    // return 3
console.log(iterator.hasNext()); // return True
console.log(iterator.next());    // return 3
console.log(iterator.hasNext()); // return false