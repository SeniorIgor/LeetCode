class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Time Complexity: O(m * log(n))
// Space Complexity: O(log(n))
// n - the number of lists
// m - the total number nodes across all lists
const mergeTwoLists = (first: ListNode | null, second: ListNode | null): ListNode | null => {
  const head = new ListNode(0);
  let node = head;
  
  while(first && second) {
    if(first.val < second.val) {
      node.next = first;
      first = first.next;
    } else {
      node.next = second;
      second = second.next;
    }
    
    node = node.next;
  }

  if(first) {
    node.next = first;
  }

  if(second) {
    node.next = second;
  }

  return head.next;
}

function mergeKLists(lists: Array<ListNode | null>, start: number = 0, end: number = lists.length - 1): ListNode | null {
  if(end === start) {
    return lists[start] || null;
  }

  if(end - start < 2) {
    return mergeTwoLists(lists[start], lists[end]);
  }
  
  const half = Math.trunc((end + start) / 2);

  const left = mergeKLists(lists, start, half);
  const right = mergeKLists(lists, half + 1, end);

  return mergeTwoLists(left, right);
};

// const first = new ListNode(1);
// const second = new ListNode(4);
// first.next = second;
// const third = new ListNode(5);
// second.next = third;

// const fourth = new ListNode(1);
// const fifth = new ListNode(3);
// fourth.next = fifth;
// const sixth = new ListNode(4);
// fifth.next = sixth;

// const seventh = new ListNode(2);
// const eighth = new ListNode(6);
// seventh.next = eighth;

const first = new ListNode();

// const second = new ListNode();
// const third = new ListNode();
// const fourth = new ListNode();
// const fifth = new ListNode();
// const sixth = new ListNode();
// const seventh = new ListNode();


// const lists = [first, second, third, fourth, fifth, sixth, seventh];
const lists = [first];

const result = mergeKLists(lists);
console.log({ result: JSON.stringify(result, null, 4) });