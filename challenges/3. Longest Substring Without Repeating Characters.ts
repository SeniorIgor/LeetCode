export function lengthOfLongestSubstring(s: string): number {
  const symbols = new Map();
  let maxLength = 0;
  let first = 0;

  for(let i = 0; i < s.length; i++) {
    const position = symbols.get(s[i]);
    
    if(position !== undefined) {
      maxLength = Math.max(maxLength, i - first);
      first = Math.max(position + 1, first);
    }
    
    symbols.set(s[i], i);
  }

  return Math.max(maxLength, s.length - first);
};

// Test Case #1
// const value = "abcabcbb";
// Test Case #2
// const value = " ";
// Test Case #3
// const value = "dvdf";
// Test Case #4
const value = "abba";
const result = lengthOfLongestSubstring(value);
console.log(result);