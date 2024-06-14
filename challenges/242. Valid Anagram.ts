function isAnagram(s: string, t: string): boolean {
  if(s.length !== t.length) {
    return false;
  }
  
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const value = map.get(s[i]) || 0;
    map.set(s[i], value + 1);
  }
  
  for (let i = 0; i < t.length; i++) {
    const value = map.get(t[i]);

    if(!value) {
      return false;
    } else {
      map.set(t[i], value - 1);
    }
  }

  return true;
};

const value = "rat";
const magazine = "car";
const result = isAnagram(value, magazine);
console.log(result);
