function merge(intervals: number[][]): number[][] {
  if(intervals.length < 2) {
    return intervals;
  }
  
  intervals.sort((a, b) => a[0] - b[0]);

  const result: Array<Array<number>> = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {   
    const lastElement = result[result.length - 1];

    if(lastElement[1] >= intervals[i][0]) {
      lastElement[1] = Math.max(lastElement[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

const value = [[1,4],[0,0]];
const result = merge(value);
console.log(result);