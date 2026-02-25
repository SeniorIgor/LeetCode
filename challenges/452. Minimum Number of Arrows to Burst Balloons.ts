export function findMinArrowShots(points: number[][]): number {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let arrowX = points[0][1];

  for (let i = 1; i < points.length; i++) {
    const [start, end] = points[i];

    if (start > arrowX) {
      arrows++;
      arrowX = end;
    }
  }

  return arrows;
};

const value = [[10, 16], [2, 8], [1, 6], [7, 12]];
const result = findMinArrowShots(value);
console.log(result);

// Another Solution
// export function findMinArrowShots(points: number[][]): number {
//   points.sort((a, b) => a[0] - b[0]);
//   let arrows = 1;
//   let overlapEnd = points[0][1];

//   for (let i = 1; i < points.length; i++) {
//     const [start, end] = points[i];

//     if (start <= overlapEnd) {
//       overlapEnd = Math.min(overlapEnd, end);
//     } else {
//       arrows++;
//       overlapEnd = end;
//     }
//   }

//   return arrows;
// };
