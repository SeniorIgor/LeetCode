function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");

  if(words?.length !== pattern.length) {
    return false;
  }

  const pMap = new Map();
  const wMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const pValue = pMap.get(pattern[i]);
    const wValue = wMap.get(words[i]);

    if(pValue !== undefined || wValue !== undefined) {
      if(pValue !== words[i] || wValue !== pattern[i]) {
        return false;
      }
    } else {
      pMap.set(pattern[i], words[i]);
      wMap.set(words[i], pattern[i]);
    }
  }

  return true;
};

const value = "abba";
const magazine = "dog cat cat fish";
const result = wordPattern(value, magazine);
console.log(result);
