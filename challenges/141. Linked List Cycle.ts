class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) {
    return false;
  }

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (slow?.next && fast?.next?.next && slow !== fast) {
    slow = slow.next;
    fast = fast.next.next
  }

  return slow === fast;
};

const first = new ListNode(3);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(0);
second.next = third;
const fourth = new ListNode(-4);
third.next = fourth;
fourth.next = second;

const result = hasCycle(first);
console.log(result);

// Another Solution
// export function hasCycle(head: ListNode | null): boolean {
//   let slow = head;
//   let fast = head;

//   while (fast !== null && fast.next !== null) {
//     slow = slow!.next;
//     fast = fast.next.next

//     if (slow === fast) {
//       return true;
//     }
//   }

//   return false;
// };
