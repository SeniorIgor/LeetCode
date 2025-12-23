export function strStr(haystack: string, needle: string): number {
  for(let i = 0; i < haystack.length; i++) {
    let j = 0
    
    for(; j < needle.length; j++) {
      if(haystack[i + j] !== needle[j]) {
        break;
      }
    }

    if(j === needle.length) {
      return i;
    }
  }

  return -1;
};

// Test Case #1
const haystack = "mississippi";
const needle = "issip";

// Test Case #2
// const haystack = "abc";
// const needle = "c";
const result = strStr(haystack, needle);
console.log(result);

// Solution #1 
// export function strStr(haystack: string, needle: string): number {
//   return haystack.indexOf(needle);
// };

// Solution #2
// export function strStr(haystack: string, needle: string): number {
//   if(haystack.length === needle.length) {
//     return haystack === needle ? 0 : -1;
//   }
  
//   for(let i = 0; i <= haystack.length - needle.length; i++) {
//     const word = haystack.slice(i, i + needle.length);

//     if(word === needle) {
//       return i;
//     }
//   }

//   return -1;
// };