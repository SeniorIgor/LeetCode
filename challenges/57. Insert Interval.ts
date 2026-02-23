// TODO: Solve again
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  let result: number[][] = [];
  let index = 0;
  let [start, end] = newInterval;

  // Add all intervals completely before [start, end]
  while (index < intervals.length && intervals[index][1] < start) {
    result.push(intervals[index]);
    index++;
  }

  // Merge all overlapping intervals into [start, end]
  while (index < intervals.length && intervals[index][0] <= end) {
    start = Math.min(start, intervals[index][0]);
    end = Math.max(end, intervals[index][1]);
    index++;
  }

  result.push([start, end]);

  // Add the rest
  while (index < intervals.length) {
    result.push(intervals[index]);
    index++;
  }

  return result;
};

// Test Case 1 -> [ [ 1, 2 ], [ 4, 10 ], [ 12, 16 ] ]
// const value = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
// const newInterval = [4, 8];
// Test Case 2  -> [ [ 1, 5 ], [ 6, 9 ] ]
// const value = [[1, 3], [6, 9]];
// const newInterval = [2, 5];
// Test Case 3 -> [ [ 2, 5 ] ]
// const value = [];
// const newInterval = [2, 5];
// Test Case 4 -> [ [ 0, 0 ], [ 1, 5 ] ]
const value = [[1, 5]];
const newInterval = [0, 0];
const result = insert(value, newInterval);
console.log(result);
