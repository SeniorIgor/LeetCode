function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let length = 0;
  let start = 0;

  for (let i = 1; i <= s.length; i++) { 
    const element = s[i - 1];
    const elementPointer = map.get(element);

    if(elementPointer !== undefined) {
      length = Math.max(i - 1 - start, length);
      start = Math.max(start, elementPointer);
    } 
    
    map.set(element, i);
  }

  return Math.max(s.length - start, length);
};

const value = " ";
const result = lengthOfLongestSubstring(value);
console.log(result);

// "abba"
// "dvdk"
//   |
//  1234