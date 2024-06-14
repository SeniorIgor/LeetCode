class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Iterative solution
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let current = head;
    let amount = 0;

    while (current !== null) {
        current = current.next;
        amount++;
    }

    const numberOfGroup = Math.trunc(amount / k);

    let index = 1;
    let start: ListNode | null = null;
    let predNode: ListNode | null = null;
    let predEndOfSequence: ListNode | null = null;
    
    for (let i = 0; i < numberOfGroup; i++) {
        const endOfSequence = head;
        
        while(index <= (i + 1) * k && head) {
            const nextNode = head.next || null;
            head.next = predNode;
            predNode = head;
            head = nextNode;
            index++;
        }

        if(predEndOfSequence) {
            predEndOfSequence.next = predNode;
        }
        
        if(i === 0) {
            start = predNode;
        }

        if(endOfSequence) {
            endOfSequence.next = head;
        }

        predEndOfSequence = endOfSequence;
    }

    return start;
};

// Recursive solution
// function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//     if(!head) {
//         return null;
//     }
    
//     let count = k;
//     let current: ListNode | null = head;

//     while(current && count > 0) {
//         current = current.next;
//         count--;
//     }

//     if(count > 0) {
//         return head;
//     }
    
//     current = head;
//     let prevNode: ListNode | null = null;

//     for (let i = 0; i < k; i++) {
//         if(!current) {
//             return null;
//         }

//         const nextNode = current?.next || null;
//         current.next = prevNode;
//         prevNode = current;
//         current = nextNode;
//     }

//     head.next = reverseKGroup(current, k);

//     return prevNode;
// };

const first = new ListNode(1);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(3);
second.next = third;
const fourth = new ListNode(4);
third.next = fourth;
const fifth = new ListNode(5);
fourth.next = fifth;

const result = reverseKGroup(first, 2);
console.log(JSON.stringify(result, null, 4));


// 1 -> 2 -> 3 -> 4 -> 5
// |
// head
// end