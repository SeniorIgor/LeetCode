// Recursive solution
// Time complexity: N * 4^N
// Space complexity: O(4^N)
const map = new Map([ ["2", "abc"], ["3", "def"], ["4", "ghi"], ["5", "jkl"], ["6", "mno"],
  ["7", "pqrs"], ["8", "tuv"], ["9", "wxyz"] ]);

function letterCombinations(digits: string): string[] {
  if(!digits.length) {
    return [];
  }

  const result: Array<string> = [];

  const backtracking = (index: number, word: string) => {
    const digit = digits[index];
    const list = map.get(digit) || [];

    for(const letter of list) {
      if(index + 1 === digits.length) {
        result.push(word + letter);
      } else {
        backtracking(index + 1, word + letter);
      }
    }
  }

  backtracking(0, '');

  return result;
};

// Iterative solution
// Time complexity: N * 4^N
// Space complexity: O(4^N)
// function letterCombinations(digits: string): string[] {
//   if(!digits.length) {
//     return [];
//   }

//   const map = new Map([ [2, ["a","b","c"]], [3, ["d","e","f"]], [4, ["g","h","i"]], [5, ["j","k","l"]], [6, ["m","n","o"]],
//     [7, ["p","q","r", "s"]], [8, ["t","u","v"]], [9, ["w","x","y", "z"]] ]);

//   const queue: Array<string> = [""];

//   for(const digit of digits) {
//     let length = queue.length;
//     const list = map.get(+digit) || [];

//     while(length > 0) {
//       const value = queue.shift();

//       for(const letter of list) {
//         queue.push(value + letter); 
//       }

//       length--;
//     }
//   }

//   return queue;
// };

const digits = "23";
const result = letterCombinations(digits);
console.log({ result });
