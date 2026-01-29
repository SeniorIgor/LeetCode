export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array<number>(26).fill(0);

  for (let letter of s) {
    const idx = letter.charCodeAt(0) - 97;
    count[idx] = count[idx] + 1;
  }

  for (let letter of t) {
    const idx = letter.charCodeAt(0) - 97;

    if (count[idx] === 0) {
      return false;
    } else {
      count[idx] = count[idx] - 1;
    }
  }

  return true;
};

// Test Case #1
// const value = "rat";
// const magazine = "car";
// Test Case #2
const value = "anagram";
const magazine = "nagaram";
const result = isAnagram(value, magazine);
console.log(result);
