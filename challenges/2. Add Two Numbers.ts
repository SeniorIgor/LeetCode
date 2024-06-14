class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let current: ListNode = new ListNode();
  let head: ListNode = current;
  let decimal = 0;
  
  while(l1 !== null || l2 !== null || decimal > 0) {
    const sum = decimal + (l1?.val || 0) + (l2?.val || 0);
    decimal = Math.trunc(sum / 10);
    const rest = sum % 10;

    const node: ListNode = new ListNode(rest);

    current.next = node;
    current = current.next;

    l1 = l1?.next || null;
    l2 = l2?.next || null;
  }

  return head.next;
};

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

const result = addTwoNumbers(first, fourth);
console.log(JSON.stringify(result, null, 4));
