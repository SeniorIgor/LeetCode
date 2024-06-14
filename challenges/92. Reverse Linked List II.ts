class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let current: ListNode | null = head;
    let prevNode: ListNode | null = null;
    let index = 1;
    
    while(index < left) {
        prevNode = current;
        current = current?.next || null;
        index++;
    }

    let nodeBeforeReverse = prevNode;
    let endOfReverseSection = current;

    while (index <= right && current) {      
        const nextNode = current.next || null;
        current.next = prevNode;
        prevNode = current;
        current = nextNode;
        index++;
    }

    if(nodeBeforeReverse) {
        nodeBeforeReverse.next = prevNode; 
    } else {
        head = prevNode;
    }

    if(endOfReverseSection) {
        endOfReverseSection.next = current;
    }

    return head;
};

const first = new ListNode(3);
const second = new ListNode(5);
first.next = second;
// const third = new ListNode(3);
// second.next = third;
// const fourth = new ListNode(4);
// third.next = fourth;
// const fifth = new ListNode(5);
// fourth.next = fifth;

const result = reverseBetween(first, 1, 2);
console.log(JSON.stringify(result, null, 4));


// 1 -> 2 -> 3 -> 4 -> 5
//           |
//          head
//     end
//     local