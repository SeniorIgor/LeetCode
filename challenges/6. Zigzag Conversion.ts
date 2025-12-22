export function convert(s: string, numRows: number): string {
  if(s.length < 2 || numRows === 1 || numRows > s.length) {
    return s;
  }
  
  let result = "";
  
  for(let row = 1; row <= numRows; row++) {
    let index = row;
    let zigzagNumber = 1;
    
    while(index <= s.length) {
      result += s[index - 1];

      // Side rows
      if(row === 1 || row === numRows) {
        index += (numRows - 1) * 2;
      } else {
        if(zigzagNumber % 2 === 1) {
          index += (numRows - row) * 2;
        } else {
          index += ((numRows - 1) - (numRows - row)) * 2;
        }
      }

      zigzagNumber++;
    }
  }

  return result;
};

// Test Case #1 -> ACBD
// const value = "ABCD";
// const numRows = 2;

// Test Case #2 -> PAHNAPLSIIGYIR
// const value = "PAYPALISHIRING";
// const numRows = 3;

// Test Case #3 -> PINALSIGYAHRPI
// const value = "PAYPALISHIRING";
// const numRows = 4;

// Test Case #4 -> A
// const value = "A";
// const numRows = 1;

// Test Case #5 -> AB
const value = "AB";
const numRows = 3;

const result = convert(value, numRows);
console.log(result);


// 5 rows
// 1 row: 4 + 4
// 2 row: 3 + 3  ->  1 + 1
// 3 row: 2 + 2
// 4 row: 1 + 1  ->  3 + 3
// 5 row: 4 + 4
// 

// 4 rows
// 1 row: 3 + 3
// 2 row: 2 + 2  ->  1 + 1
// 3 row: 1 + 1  ->  2 + 2
// 4 row: 3 + 3
// 

// 6 rows
// 1 row: 5 + 5
// 2 row: 4 + 4  ->  1 + 1
// 3 row: 3 + 3  ->  2 + 2
// 4 row: 2 + 2  ->  3 + 3
// 5 row: 1 + 1  ->  4 + 4
// 6 row: 4 + 4

// 1 Q          O
// 2 W        I P
// 3 E      U   A       G
// 4 R    Y     S     F
// 5 T  V       D  C
// 6 Z          X

// 1 Q        O
// 2 W      I P
// 3 E    U   A    G
// 4 R  Y     S  F
// 5 T        D

// 1 Q      O
// 2 W    I P
// 3 E  U   A  G
// 4 R      S
