// TODO: Solve again
export function calculate(s: string): number {
  let result = 0;
  let sign = 1;
  let currentNumber = 0;
  const stack: number[] = [];

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if ("0" <= char && char <= "9") {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "+" || char === "-") {
      result += sign * currentNumber;
      currentNumber = 0;
      sign = char === "+" ? 1 : -1;
    } else if (char === "(") {
      stack.push(result, sign);
      result = 0;
      sign = 1;
      currentNumber = 0;
    } else if (char === ")") {
      result += sign * currentNumber;
      currentNumber = 0;

      const prevSign = stack.pop()!;
      const prevResult = stack.pop()!;
      result = prevResult + prevSign * result;
    } // spaces are ignored
  }

  return result + sign * currentNumber;
}

// Test Case #1 -> 23
const value = "(1+(4+5+2)-3)+(6+8)";
const result = calculate(value);
// Test Case #2 -> 2
// const value = "1 + 1";
// const result = calculate(value);
// Test Case #3 -> 3
// const value = " 2-1 + 2 ";
// const result = calculate(value);
// Test Case #4 -> 2147483647
// const value = "2147483647";
// const result = calculate(value);
// Test Case #5 -> -1
// const value = "-2+ 1";
// const result = calculate(value);
// Test Case #6 -> -2
// const value = "-(3+4)+5";
// const result = calculate(value);
console.log(result);
