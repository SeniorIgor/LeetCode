class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const result = new ListNode();
  let current = result;

  while(list1 && list2) {
    if(list1.val < list2.val) {
      current.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      current.next =  new ListNode(list2.val);
      list2 = list2.next;
    }
    
    current = current.next;
  }

  if(list1 || list2) {
    current.next = list1 || list2;
  }
  
  return result.next;
};

const first = new ListNode(1);
const second = new ListNode(2);
first.next = second;
const third = new ListNode(4);
second.next = third;

const fourth = new ListNode(1);
const fifth = new ListNode(3);
fourth.next = fifth;
const sixth = new ListNode(4);
fifth.next = sixth;

const result = mergeTwoLists(first, fourth);
console.log(JSON.stringify(result, null, 4));
