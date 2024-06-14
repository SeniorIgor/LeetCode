function findMinArrowShots(points: number[][]): number {
  let end: number | undefined; 
  let count = 0;
  
  points.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < points.length; i++) { 
    if(end === undefined || end < points[i][0]) {
      end = points[i][1];
      count++;
    }
  }

  return count;
};

const value = [[10,16],[2,8],[1,6],[7,12]];
const result = findMinArrowShots(value);
console.log(result);