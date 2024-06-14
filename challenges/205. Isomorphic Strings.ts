function isIsomorphic(s: string, t: string): boolean {
  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sValue = sMap.get(s[i]);
    const tValue = tMap.get(t[i]);
    
    if(sValue !== undefined || tValue !== undefined) {
      if(sValue !== t[i] || tValue !== s[i]) {
        return false;
      }
    } else {
      sMap.set(s[i], t[i]);
      tMap.set(t[i], s[i]);
    }
  }

  return true;
};

const value = "paper";
const magazine = "title";
const result = isIsomorphic(value, magazine);
console.log(result);
