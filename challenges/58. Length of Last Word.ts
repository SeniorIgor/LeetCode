export function lengthOfLastWord(s: string): number {
  const str = s.trim();
  
  return str.length - 1 - str.lastIndexOf(" ");
};

const value = "   fly me   to   the moon  ";
const result = lengthOfLastWord(value);
console.log(result);

// Solution #2
// export function lengthOfLastWord(s: string): number {
//   const array = s.trim().split(' ');
  
//   return array[array.length - 1].length;
// };