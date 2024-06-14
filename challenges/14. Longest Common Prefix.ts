function longestCommonPrefix(strs: string[]): string {
  if(strs.length < 1) {
    return "";
  }
  
  let word = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(word) !== 0) {
      word = word.slice(0, word.length - 1);

      if(word === "") {
        return ""
      }
    }
  }

  return word;
};

const value = ["flower","flow","flight"];
const result = longestCommonPrefix(value);
console.log(result);