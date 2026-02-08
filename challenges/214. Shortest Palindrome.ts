// TODO: Solve again
// Knuth–Morris–Pratt algorithm (KMP)
export function shortestPalindrome(s: string): string {
  const reversed = s.split("").reverse().join("");
  const combined = s + "#" + reversed;
  const table = new Array(combined.length).fill(0);

  for (let i = 1; i < combined.length; i++) {
    let j = table[i - 1];

    while (j > 0 && combined[i] !== combined[j]) {
      j = table[j - 1];
    }

    if (combined[i] === combined[j]) {
      j++;
    }

    table[i] = j;
  }

  const prefixLength = table[table.length - 1];

  return reversed.slice(0, s.length - prefixLength) + s;
};

// Test Case #1
const value = "aacecaaa"; // aaacecaaa
const result = shortestPalindrome(value);
// Test Case #2
// const value = "abcd"; // dcbabcd
// const result = shortestPalindrome(value);
// Test Case #3
// const value = "aba"; // aba
// const result = shortestPalindrome(value);
console.log(result);


// Brute Force Algorithm
// export function shortestPalindrome(s: string): string {
//   const reverse = s.split('').reverse().join("");

//   if (s === reverse) {
//     return s;
//   }

//   let count = 1;

//   while (count < s.length) {
//     const word = s.slice(0, s.length - count);
//     const reverseWord = reverse.slice(count);

//     if (word === reverseWord) {
//       break;
//     }

//     count++;
//   }

//   return reverse.slice(0, count) + s;
// };