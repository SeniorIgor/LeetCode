function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: Array<Array<number>> = [];
  let i = 0;

  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  while (i < intervals.length && newInterval[1] >= intervals[i][0]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    i++;
  }

  result.push(newInterval);

  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
};

const value = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8];
const result = insert(value, newInterval);
console.log(result);

// [[1,2],[3,5],[6,7],[8,10],[12,16]]
// [4,8]

