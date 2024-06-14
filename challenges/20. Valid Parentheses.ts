function isValid(s: string): boolean {
  const stack: Array<string> = [];

  for (let i = 0; i < s.length; i++) {
    const item = s[i];

    if(item === '(') {
      stack.push(')');
    } else if(item === '[') {
      stack.push(']');
    } else if(item === '{') {
      stack.push('}');
    } else if(!stack.length || stack.pop() !== item) {
      return false;
    }
  }

  return !stack.length;
};

const value = "(]";
const result = isValid(value);
console.log(result);