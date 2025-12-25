export function isPalindrome(s: string): boolean {
  const regexp = /[^a-z0-9]/g;

  const word = s.toLowerCase().replace(regexp, "");
  let startIndex = 0;
  let finalIndex = word.length - 1;

  while(startIndex < finalIndex) {
    if(word[startIndex++] !== word[finalIndex--]) {
      return false;
    }
  }

  return true;
};

const value = "race a car";
const result = isPalindrome(value);
console.log(result);

// Solution #1
// export function isPalindrome(s: string): boolean {
//   const regexp = /[a-z0-9]/g;

//   const words = s.toLowerCase().match(regexp) || [];

//   return words.join("") === words.reverse().join("");
// };

// Solution #2
// export function isPalindrome(s: string): boolean {
//   const regexp = /[^a-z0-9]/g;

//   const word = s.toLowerCase().replace(regexp, "");
//   const letters = word.split('');
//   let startIndex = 0;
//   let finalIndex = letters.length - 1;

//   while(startIndex < finalIndex) {
//     const letter = letters[finalIndex];
    
//     letters[finalIndex] = letters[startIndex];
//     letters[startIndex] = letter;

//     startIndex++;
//     finalIndex--;
//   }

//   return word === letters.join("");
// };