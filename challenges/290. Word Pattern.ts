export function wordPattern(pattern: string, s: string): boolean {
  const wordList = s.split(" ");

  if (wordList.length !== pattern.length) {
    return false;
  }

  const charToWord = new Array<string | undefined>(26);
  const wordToChar = new Map<string, number>();

  for (let i = 0; i < pattern.length; i++) {
    const idx = pattern[i].charCodeAt(0) - 97;
    const word = wordList[i];

    const mappedWord = charToWord[idx];
    const mappedChar = wordToChar.get(word);

    if (mappedWord === undefined && mappedChar === undefined) {
      charToWord[idx] = word;
      wordToChar.set(word, idx);
    } else if (mappedWord !== word || mappedChar !== idx) {
      return false;
    }
  }

  return true;
};

// Test Case #1
const value = "abba";
const magazine = "dog cat cat fish";
// Test Case #2
// const value = "abba";
// const magazine = "dog cat cat dog";
const result = wordPattern(value, magazine);
console.log(result);
