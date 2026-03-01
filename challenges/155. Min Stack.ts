class Node {
  constructor(
    public val: number,
    public min: number,
    public next: Node | null
  ) { }
}

// TODO: Solve again
export class MinStack {
  private head: Node | null = null;

  push(val: number): void {
    if (this.head === null) {
      this.head = new Node(val, val, null);
    } else {
      this.head = new Node(val, Math.min(val, this.head.min), this.head);
    }
  }

  pop(): void {
    this.head = this.head!.next;
  }

  top(): number {
    return this.head!.val;
  }

  getMin(): number {
    return this.head!.min;
  }
}

// Test Case #1
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // -3
// minStack.pop();
// console.log(minStack.top()); // 0
// console.log(minStack.getMin()); // -2
// Test Case #2
const minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.getMin()); // 0
minStack.pop();
console.log(minStack.getMin()); // 0
minStack.pop();
console.log(minStack.getMin()); // 0
minStack.pop();

console.log(minStack);

// Another Solution
// export class MinStack {
//   private values: number[] = [];
//   private mins: number[] = [];

//   push(val: number): void {
//     this.values.push(val);

//     if (this.mins.length === 0) {
//       this.mins.push(val);
//     } else {
//       const currentMin = Math.min(this.mins[this.mins.length - 1], val);
//       this.mins.push(currentMin);
//     }
//   }

//   pop(): void {
//     this.values.pop();
//     this.mins.pop();
//   }

//   top(): number {
//     return this.values[this.values.length - 1];
//   }

//   getMin(): number {
//     return this.mins[this.mins.length - 1];
//   }
// }