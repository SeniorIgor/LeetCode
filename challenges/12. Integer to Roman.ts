export function intToRoman(num: number): string {
  const thousands = ["", "M", "MM", "MMM", "MMMM"];
  const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return thousands[Math.trunc(num / 1000)] 
    + hundreds[Math.trunc(num % 1000 / 100)] 
    + tens[Math.trunc(num % 100 / 10)]
    + units[Math.trunc(num % 10)];
};

// Test Case #1 -> MCMXCIV
// const value = 1994;
// Test Case #2 -> MMMDCCXLIX
// const value = 3749;
// Test Case #3 -> LVIII
// const value = 58;
// Test Case #4 -> X
const value = 10;
const result = intToRoman(value);
console.log(result);
