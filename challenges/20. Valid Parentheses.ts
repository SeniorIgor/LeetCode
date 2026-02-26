export function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if (item === '(') {
      stack.push(")");
    } else if (item === '{') {
      stack.push("}");
    } else if (item === '[') {
      stack.push("]");
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};

// Test Case #1
// const value = "(]";
// const result = isValid(value);
// Test Case #2
const value = "()";
const result = isValid(value);
console.log(result);

// Another Solution
// export function isValid(s: string): boolean {
//   const expectedClose: Record<string, string> = { "(": ")", "{": "}", "[": "]" };
//   let stack: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     const value = expectedClose[s[i]];

//     if (value !== undefined) {
//       stack.push(value);
//       continue;
//     } else if (stack.pop() !== s[i]) {
//       return false;
//     }
//   }

//   return stack.length === 0;
// };