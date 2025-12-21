export function reverseWords(s: string): string {
  return s.match(/\S+/g)?.reverse().join(" ") || "";
};

const value = "the sky is blue";
const result = reverseWords(value);
console.log(result);

// Solution #1
// function reverseWords(s: string): string {
//   return s.trim().split(/\s+/).reverse().join(' ');
// };
