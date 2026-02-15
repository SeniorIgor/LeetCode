// TODO: Solve again
export function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;

  do {
    slow = next(slow);
    fast = next(fast);
    fast = next(fast);
  } while (fast !== 1 && slow !== fast)

  return fast === 1;
};

function next(num: number) {
  let sum = 0;

  while (num > 0) {
    const digit = num % 10;

    sum += digit * digit;

    num = Math.floor(num / 10);
  }

  return sum;
}

// Test Case #1 -> true
const value = 19;
const result = isHappy(value);

// Test Case #2 -> false
// const value = 2;
// const result = isHappy(value);
console.log(result);

// Another Solution
// export function isHappy(n: number): boolean {
//   const seen = new Set();

//   let sum = n;

//   while (sum !== 1 && !seen.has(sum)) {
//     seen.add(sum);

//     sum = squareDigitSum(sum);
//   }

//   return sum === 1;
// };

// function squareDigitSum(num: number) {
//   let sum = 0;

//   while (num > 0) {
//     const digit = num % 10;

//     sum += digit * digit;

//     num = Math.floor(num / 10);
//   }

//   return sum;
// }