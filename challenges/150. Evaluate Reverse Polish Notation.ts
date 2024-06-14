function evalRPN(tokens: string[]): number {
  const stack: Array<number> = [];
  
  for (let i = 0; i < tokens.length; i++) {
    const item = tokens[i];

    if(item === '+') {
      const second = stack.pop() || 0;
      const first = stack.pop() || 0;
      stack.push(first + second);
    } else if(item === '*') {
      const second = stack.pop() || 0;
      const first = stack.pop() || 0;
      stack.push(first * second);
    } else if(item === '/') {
      const second = stack.pop() || 0;
      const first = stack.pop() || 0;
      stack.push(Math.trunc(first / second));
    } else if(item === '-') {
      const second = stack.pop() || 0;
      const first = stack.pop() || 0;
      stack.push(first - second);
    } else {
      stack.push(+item);
    }
  }

  return stack.pop() || 0;
};

const value = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
const result = evalRPN(value);
console.log(result);

