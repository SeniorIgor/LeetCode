// Iterative solution
// Time complexity: O(k * (n! / (k! * (n - k))))
// Space Complexity: O(k * (n! / (k! * (n - k))))
function combine(n: number, k: number): number[][] {
  const result: Array<Array<number>> = [];

  const queue: Array<{ list: Array<number>, start: number }> = [{ list: [], start: 1 }];

  while(queue.length) {
    const { list, start } = queue.pop() || { list: [], start: 0 };

    if(list?.length === k) {
      result.push(list);
      continue;
    }

    for (let i = start; i <= n; i++) {
      queue.push({ list: [...list, i], start: i + 1 });
    }
  }

  return result;
};

// Recursive solution
// Time complexity: O(k * (n! / (k! * (n - k))))
// Space Complexity: O(k * (n! / (k! * (n - k))))
// function combine(n: number, k: number): number[][] {
//   const result: Array<Array<number>> = [];

//   const backtrack = (list: Array<number>, start: number) => {
//     const length = list.length;

//     if(length === k) {
//       result.push([...list]);
//       return;
//     }

//     for(let i = start; i < n; i++) {
//       list.push(i + 1);
//       backtrack(list, i + 1);
//       list.pop();
//     }
//   }

//   backtrack([], 0);

//   return result;
// };

const  n = 4;
const k = 3;
const result = combine(n, k);
console.log({ result });
