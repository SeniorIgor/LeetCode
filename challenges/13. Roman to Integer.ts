function romanToInt(s: string): number {
  const map = new Map([['I', 1], ["V", 5], ['X', 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);

  const result = s.replace(/IV/g, 'IIII')
   .replace(/IX/g, "VIIII")
   .replace(/XL/g, "XXXX")
   .replace(/XC/g, 'LXXXX')
   .replace(/CD/g, 'CCCC')
   .replace(/CM/g, "DCCCC");

  const sum = result.split('').reduce((res, item) => res += (map.get(item) || 0), 0);

  return sum;
};

const value = "MCMXCIV";
const result = romanToInt(value);
console.log(result);
