function intToRoman(num: number): string {
  const thousands = ['', "M", "MM", "MMM", "MMMM"];
  const hundreds = ['', 'C', 'CC', "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
  const tens = ['', 'X', "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; 
  const digits = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  const result = thousands[Math.floor(num / 1000)] + hundreds[Math.floor(num % 1000 / 100)] + 
    tens[Math.floor(num % 100 / 10)] + digits[Math.floor(num % 10)];

  return result;
};

const value = 1994;
const result = intToRoman(value);
console.log(result);
