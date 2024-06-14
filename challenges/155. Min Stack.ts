// TODO: Solve again
class MinStack {
  stack: Array<number>;
  minStack: Array<number>;

  constructor() {
    this.stack = [];
    this.minStack = [];    
  }

  push(val: number): void {
    this.stack.push(val);

    if(!this.minStack.length) {
      this.minStack.push(val);
    } else {
      const prevMin = this.minStack[this.minStack.length - 1]; 
      
      this.minStack.push(Math.min(prevMin, val));
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top()); 
console.log(minStack.getMin());

console.log(minStack);
