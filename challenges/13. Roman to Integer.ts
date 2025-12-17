export function romanToInt(s: string): number {
  const map = new Map([["I", 1], ["V", 5], ["X", 10], ["L", 50],  ["C", 100], ["D", 500], ["M", 1000]]);

  s = s.replace(/IV/g, 'IIII')
       .replace(/IX/g, 'VIIII')
       .replace(/XL/g, 'XXXX')
       .replace(/XC/g, 'LXXXX')
       .replace(/CD/g, 'CCCC')
       .replace(/CM/g, 'DCCCC');

  return s.split('').reduce((result, value) => result + (map.get(value) || 0), 0);
};

// Test Case #1 -> 1994
const value = "MCMXCIV";
const result = romanToInt(value);
console.log(result);