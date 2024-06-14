function isSubsequence(s: string, t: string): boolean {
  let pointer = 0;

  for (let i = 0; i < t.length; i++) {
    if(t[i] === s[pointer]) {
      pointer++;
    }
  }

  return pointer === s.length;
};

const subsequence = "axc";
const value = "ahbgdc"
const result = isSubsequence(subsequence, value);
console.log(result);
