export function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0;
  let tIndex = 0;
  
  while(sIndex < s.length && tIndex < t.length) {
    if(s[sIndex] !== t[tIndex]) {
      tIndex++;
    } else {
      tIndex++;
      sIndex++;
    }
  }

  return sIndex === s.length;
};

// Test Case #1 -> false
const subsequence = "axc";
const value = "ahbgdc"
const result = isSubsequence(subsequence, value);
console.log(result);

// First Solution
// export function isSubsequence(s: string, t: string): boolean {
//   let prevIndex = 0;
  
//   for(let i = 0; i < s.length; i++) {
//     let isLetterExist = false;

//     for (let j = prevIndex; j < t.length; j++) {
//       if(s[i] === t[j]) {
//         isLetterExist = true;
//         prevIndex = j + 1;
//         break;
//       }
//     }

//     if(!isLetterExist) {
//       return false;
//     }
//   }

//   return true;
// };

// Second Solution
// function isSubsequence(s: string, t: string): boolean {
//   let pointer = 0;

//   for (let i = 0; i < t.length; i++) {
//     if(t[i] === s[pointer]) {
//       pointer++;
//     }
//   }

//   return pointer === s.length;
// };