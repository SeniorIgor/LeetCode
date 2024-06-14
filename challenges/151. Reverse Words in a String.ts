function reverseWords(s: string): string {
  return s.trim().split(/\s+/).reverse().join(' ');
};

const value = "the sky is blue";
const result = reverseWords(value);
console.log(result);