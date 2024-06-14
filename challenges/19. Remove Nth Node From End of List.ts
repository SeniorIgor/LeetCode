class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let slow = head;
    let fast = head;

    for (let index = 1; index <= n; index++) {
        fast = fast?.next || null;
    }

    if(!fast) {
        return head?.next || null;
    }

    while(fast?.next && slow) {
        fast = fast.next;
        slow = slow.next;
    }

    if(slow?.next) {
        slow.next = slow?.next?.next || null;
    }

    return head;
};

const first = new ListNode(1);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(3);
second.next = third;
const fourth = new ListNode(4);
third.next = fourth;
const fifth = new ListNode(5);
fourth.next = fifth;

const result = removeNthFromEnd(first, 1);
console.log(JSON.stringify(result, null, 4));

// 1 -> 2 -> 3 -> 4 -> 5
// |
// head
// end