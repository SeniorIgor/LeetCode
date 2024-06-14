function strStr(haystack: string, needle: string): number {
  if(needle.length > haystack.length) {
    return -1;
  }
  
  let index = -1;

  for (let i = 0; i < haystack.length; i++) {
    if(haystack[i] === needle[0]) {
      let pointer = 0;
      
      while(pointer !== needle.length) {
        if(haystack[i + pointer] === needle[pointer]) {
          pointer++;
        } else {
          index = -1;
          break;
        }
      }

      if(pointer === needle.length) {
        return i;
      }
    }
  }
  
  return index;
};

const value = "mississippi";
const needle = "issip";
const result = strStr(value, needle);
console.log(result);


