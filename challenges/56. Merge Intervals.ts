export function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [];

  for (let [start, end] of intervals) {
    const prev = merged[merged.length - 1];

    if (prev === undefined || prev[1] < start) {
      merged.push([start, end]);
    } else if (end > prev[1]) {
      merged[merged.length - 1][1] = end;
    }
  }

  return merged;
};

// Test Case #1 -> [ [ 0, 0 ], [ 1, 4 ] ]
// const value = [[1, 4], [0, 0]];
// const result = merge(value);
// Test Case #2 -> [[1,6],[8,10],[15,18]]
// const value = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const result = merge(value);
// Test Case #3 -> [1,5]]
const value = [[1, 4], [4, 5]];
const result = merge(value);
console.log(result);

// Another Solution
// export function merge(intervals: number[][]): number[][] {
//   const starts = Array.from<number>({ length: 1_0000 }).fill(-1);

//   for (let i = 0; i < intervals.length; i++) {
//     const value = starts[intervals[i][0]];

//     if (value < intervals[i][1]) {
//       starts[intervals[i][0]] = intervals[i][1];
//     }
//   }

//   const mergedArray = new Array<Array<number>>();

//   for (let i = 0; i < starts.length; i++) {
//     if (starts[i] === -1) {
//       continue;
//     }

//     let start = i;
//     let end = starts[i];

//     while (i < end && i < starts.length) {
//       i++;

//       if (starts[i] > end) {
//         end = starts[i];
//       }
//     }

//     mergedArray.push([start, end]);
//   }

//   return mergedArray;
// };