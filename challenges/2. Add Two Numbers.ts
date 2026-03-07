class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry !== 0) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
    carry = Math.trunc(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummy.next;
};

// Test Case #1 -> 10998
const first = new ListNode(9);
const second = new ListNode(9);
first.next = second;
const third = new ListNode(9);
second.next = third;

const fourth = new ListNode(9);
const fifth = new ListNode(9);
fourth.next = fifth;
const sixth = new ListNode(9);
fifth.next = sixth;
const seventh = new ListNode(9);
sixth.next = seventh;
// Test Case #2 -> 708
// const first = new ListNode(2);
// const second = new ListNode(4);
// first.next = second;
// const third = new ListNode(3);
// second.next = third;

// const fourth = new ListNode(5);
// const fifth = new ListNode(6);
// fourth.next = fifth;
// const sixth = new ListNode(4);
// fifth.next = sixth;

const result = addTwoNumbers(first, fourth);
console.log(JSON.stringify(result, null, 4));
