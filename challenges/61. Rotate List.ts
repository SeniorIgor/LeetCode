class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if(!head ) {
        return head;
    }
    
    let count = 1;
    let tail: ListNode | null = head; 

    while(tail?.next) {
        tail = tail.next;
        count++;
    }

    let rotations = k % count;

    if(!rotations) {
        return head;
    }

    const beginning = head;

    for (let i = 0; i < count - rotations - 1; i++) {
        head = head?.next || null;
    }

    const start = head?.next || null;

    if(head) {
        head.next = null;
    }

    if(tail) {
        tail.next = beginning || null;
    }

    return start;
};

const first = new ListNode(1);
// const second = new ListNode(1);
// first.next = second;
// const third = new ListNode(2);
// second.next = third;
// const fourth = new ListNode(4);
// third.next = fourth;
// const fifth = new ListNode(5);
// fourth.next = fifth;

const result = rotateRight(first, 1);
console.log(JSON.stringify(result, null, 4));

// 1 -> 2 -> 3 -> 4 -> 5
// |
// head
// end