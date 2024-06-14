function lengthOfLastWord(s: string): number {
  const trimmedString = s.trimEnd();
  const lastWordIndex = trimmedString.lastIndexOf(' ');

  return trimmedString.length - lastWordIndex - 1;
};

const value = "   fly me   to   the moon  ";
const result = lengthOfLastWord(value);
console.log(result);