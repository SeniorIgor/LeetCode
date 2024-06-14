function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();

  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('');
    const value = map.get(sorted);
    
    if(!value) {
      map.set(sorted, [strs[i]]);
    } else {
      value.push(strs[i]);
    }
  }

  return Array.from(map.values());
};

const value = ["eat","tea","tan","ate","nat","bat"];
const result = groupAnagrams(value);
console.log(result);
