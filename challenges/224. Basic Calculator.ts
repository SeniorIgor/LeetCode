function calculate(s: string): number {
  return eval(s);
};

const value = "(1+(4+5+2)-3)+(6+8)";
const result = calculate(value);
console.log(result);
