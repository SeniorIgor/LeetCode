export function longestCommonPrefix(strs: string[]): string {
  if(strs.length < 2) {
    return strs[0] || "";
  }
  
  let prefix = strs[0];
  
  for(let index = 1; index < strs.length; index++) {
    const word = strs[index];

    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }

  return prefix;
};

const value = ["flower","flow","flight"];
const result = longestCommonPrefix(value);
console.log(result);

// Solution #1
// export function longestCommonPrefix(strs: string[]): string {
//   if(strs.length < 2) {
//     return strs[0] || "";
//   }
  
//   const firstWord = strs[0];
  
//   for(let i = 0; i < firstWord.length; i++) {
//     const letter = firstWord[i]

//     for(let j = 1; j < strs.length; j++) {
//       const word = strs[j];

//       if(word.length - 1 < i || letter !== word[i]) {
//         return word.slice(0, i);
//       }
//     }
//   }

//   return firstWord;
// };