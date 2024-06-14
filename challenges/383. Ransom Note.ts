function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    const element = magazine[i];
    map.set(element, (map.get(element) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];
    const value = map.get(element);

    if(!value) {
      return false;
    } else {
      map.set(element, value - 1);
    }
  }

  return true;
};

const value = "aa";
const magazine = "aab";
const result = canConstruct(value, magazine);
console.log(result);
