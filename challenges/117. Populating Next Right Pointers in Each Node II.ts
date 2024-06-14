// TODO: Solve again
class Node {
    val: number
    left: Node | null
    right: Node | null
    next: Node | null
    constructor(val?: number, left?: Node, right?: Node, next?: Node) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : next)
    }
}

function connect(root: Node | null): Node | null {
    if(!root) {
        return null;
    }
    
    let previous: Node | null = null;
    let leftMost: Node | null = root;

    function link(node: Node | null) {
        if(!node) {
            return;
        }
    
        if(previous) {
            previous.next = node;
        } else {
            leftMost = node;
        } 

        previous = node;
    }

    while(leftMost) {
        let current: Node | null  = leftMost;
        leftMost = null;
        previous = null;

        while(current) {
            link(current.left);
            link(current.right);

            current = current.next;
        }
    }

    return root;
};

// Recursive solution
// function helper(root: Node | null, right: Array<Node>, row: number) {
//     if(!root) {
//         return null;
//     }

//     if(row < right.length) {
//         root.next = right[row];
//     }

//     right[row] = root;

//     helper(root.right, right, row + 1);
//     helper(root.left, right, row + 1);

//     return root;
// }

// function connect(root: Node | null): Node | null {
//     if(!root) {
//         return null;
//     }

//     const right = [];

//     return helper(root, right, 0);
// };

const first = new Node(1);
const second = new Node(2);
const third = new Node(3);
first.left = second;
first.right = third;

const fourth = new Node(4);
const fifth = new Node(5);
second.left = fourth;
second.right = fifth;

const sixth = new Node(6);
const seventh = new Node(7);
// third.left = sixth;
third.right = sixth;
fourth.left = seventh;

const eighth = new Node(8);
sixth.right = eighth;

const result = connect(first);
console.log(result);