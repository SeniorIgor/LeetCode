export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const word of strs) {
    const count = new Array(26).fill(0);

    for (let i = 0; i < word.length; i++) {
      count[word.charCodeAt(i) - 97]++;
    }

    const key = count.join("#");
    const bucket = groups.get(key);

    if (bucket) {
      bucket.push(word);
    } else {
      groups.set(key, [word]);
    }
  }

  return [...groups.values()];
};

const value = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(value);
console.log(result);

// Another Solution
// export function groupAnagrams(strs: string[]): string[][] {
//   const storage = new Map<string, string[]>();

//   for (const word of strs) {
//     const sortedWord = word.split('').sort().join("");

//     const words = storage.get(sortedWord);

//     if (words !== undefined) {
//       words.push(word);
//     } else {
//       storage.set(sortedWord, [word]);
//     }
//   }

//   return Array.from(storage.values());
// };