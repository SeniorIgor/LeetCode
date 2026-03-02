export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];

  for (let token of tokens) {
    if (!isNaN(+token)) {
      stack.push(+token);
      continue;
    }

    const right = stack.pop()!;
    const left = stack.pop()!;

    if (token === '+') {
      stack.push(left + right);
    } else if (token === '*') {
      stack.push(left * right);
    } else if (token === '/') {
      stack.push(Math.trunc(left / right));
    } else if (token === '-') {
      stack.push(left - right);
    }
  }

  return stack.pop()!;
}

const value = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
const result = evalRPN(value);
console.log(result);

// Another Solution
// export function evalRPN(tokens: string[]): number {
//   const stack: number[] = [];
//   const ops = new Set(["+", "-", "*", "/"]);

//   for (const token of tokens) {
//     if (!ops.has(token)) {
//       stack.push(Number(token));
//       continue;
//     }

//     const right = stack.pop()!;
//     const left = stack.pop()!;

//     switch (token) {
//       case "+":
//         stack.push(left + right);
//         break;
//       case "-":
//         stack.push(left - right);
//         break;
//       case "*":
//         stack.push(left * right);
//         break;
//       case "/":
//         stack.push(Math.trunc(left / right));
//         break;
//     }
//   }

//   return stack.pop()!;
// }
