function convert(s: string, numRows: number): string {
  if(numRows < 2) {
    return s;
  }
  
  const separator = numRows - 2 + numRows;
  let result = '';
  
  for (let i = 0; i < numRows; i++) {
    let index = i;
    let rest = 0;
    
    while(index < s.length) {
      result += s[index];
      const lastRow = numRows - 1;
      const isFirstLastRow = i === 0 || i === lastRow;

      if(isFirstLastRow) {
        index += separator;
      } else {
        const shift = 2 * (lastRow - i);
        
        index += rest > 0 ? separator - rest : shift;
        rest = rest > 0 ? 0 : shift; 
      }
    }
  }

  return result;
};

const value = "ABCD";
const numRows = 2;
const result = convert(value, numRows);
console.log(result);


