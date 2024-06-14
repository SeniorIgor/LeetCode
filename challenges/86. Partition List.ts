class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function partition(head: ListNode | null, x: number): ListNode | null {
    if(!head) {
        return head;
    }
    
    const firstPart = new ListNode();
    const secondPart = new ListNode();

    let currentFirst = firstPart;
    let currentSecond = secondPart;

    while (head) {
        if(head.val < x) {
            currentFirst.next = head;
            currentFirst = currentFirst.next; 
        } else {
            currentSecond.next = head;
            currentSecond = currentSecond.next;
        }

        head = head.next;
    }

    currentSecond.next = null;
    currentFirst.next = secondPart.next;

    return firstPart.next;
};

const first = new ListNode(2);
const second = new ListNode(1);
first.next = second;
// const third = new ListNode(3);
// second.next = third;
// const fourth = new ListNode(2);
// third.next = fourth;
// const fifth = new ListNode(5);
// fourth.next = fifth;
// const sixth = new ListNode(2);
// fifth.next = sixth;

const result = partition(first, 2);
console.log(JSON.stringify(result, null, 4));

// 1 -> 2 -> 3 -> 4 -> 5
// |
// head
// end