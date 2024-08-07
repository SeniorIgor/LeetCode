class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// TODO: Solve again
// Time Complexity: O(n * log(n))
// Space Complexity: O(log(n))
const merge = (left: ListNode | null, right: ListNode | null): ListNode | null => {
    const head = new ListNode(0);
    let node = head;
    
    while(left && right) {
        if(left.val < right.val) {
            node.next = left;
            left = left.next;
        } else {
            node.next = right;
            right = right.next;
        }

        node = node.next;
    }

    if(!left) {
        node.next = right;
    }

    if(!right) {
        node.next = left;
    }
    
    return head.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if(!head || !head.next) {
        return head;
    }
    
    let prev: ListNode | null = null;
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    
    while(fast && fast.next) {
        prev = slow;
        if(slow) {
            slow = slow.next;
        }
        fast = fast.next.next;
    }

    if(prev) {
        prev.next = null;
    }

    const left = sortList(head);
    const right = sortList(slow);

    return merge(left, right);
};

// Time Complexity: O(n * log(n))
// Space Complexity: O(n)
// function sortList(head: ListNode | null): ListNode | null {
//     const list: Array<ListNode> = [];
//     let node = head;

//     while(node) {
//         list.push(node);
//         const next = node.next;
//         node.next = null;
//         node = next;
//     }

//     list.sort((first, second) => first.val - second.val);

//     head = new ListNode(0);
//     node = head;
    
//     list.forEach((item) => {
//         if(node) {
//             node.next = item;
//             node = node.next;
//         }
//     })

//     return head.next;
// };

const first = new ListNode(4);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(1);
second.next = third;
const fourth = new ListNode(3);
third.next = fourth;

const result = sortList(first);
console.log({ result });