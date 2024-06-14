class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let dummyNode = new ListNode();
    let current = dummyNode;
    
    let start = head;
    let end = head;

    while(end) {
        let counter = 0;
        start = end;

        while(end && start.val === end.val) {
            end = end.next;
            counter++;
        }

        if(counter === 1) {
            current.next = start;
            start.next = null;
            current = current.next;
        }
    }

    return dummyNode.next;
};

const first = new ListNode(1);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(2);
second.next = third;
const fourth = new ListNode(2);
third.next = fourth;
const fifth = new ListNode(2);
fourth.next = fifth;

const result = deleteDuplicates(first);
console.log(JSON.stringify(result, null, 4));

// 1 -> 2 -> 3 -> 4 -> 5
// |
// head
// end