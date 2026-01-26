export function canConstruct(ransomNote: string, magazine: string): boolean {
  const counts = new Array(26).fill(0);

  for (const letter of magazine) {
    counts[letter.charCodeAt(0) - 97]++;
  }

  for (const letter of ransomNote) {
    const index = letter.charCodeAt(0) - 97;

    if (counts[index] === 0) {
      return false;
    }

    counts[index]--;
  }

  return true;
};

const value = "aa";
const magazine = "aab";
const result = canConstruct(value, magazine);
console.log(result);

// Another Solution
// export function canConstruct(ransomNote: string, magazine: string): boolean {
//   const map = new Map();

//   for (const letter of magazine) {
//     map.set(letter, (map.get(letter) || 0) + 1);
//   }

//   for (const letter of ransomNote) {
//     const value = map.get(letter);

//     if (!value || value <= 0) {
//       return false;
//     }

//     map.set(letter, value - 1);
//   }

//   return true;
// };