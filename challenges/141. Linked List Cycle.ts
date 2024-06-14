class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while(slow !== null && fast !== null) {
    slow = slow?.next || null;
    fast = fast?.next || null;
    fast = fast?.next || null;

    if(slow && fast && slow === fast) {
      return true;
    }
  }

  return false;
};

const first = new ListNode(3);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(0);
second.next = third;
const fourth = new ListNode(-4);
third.next = fourth;

const result = hasCycle(first);
console.log(result);
