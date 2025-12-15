// TODO: Solve again
export function candy(ratings: number[]): number {
  let candies = ratings.length;
  let down = 0;
  let up = 0;
  let peak = 0;

  for (let i = 1; i < ratings.length; i++) {
    const difference = ratings[i] - ratings[i - 1];
    
    if(difference < 0) {
      up = 0;
      down += 1;
      candies += down + (peak >= down ? -1 : 0);
    } else if (difference === 0) {
      down = 0;
      up = 0;
      peak = 0;
    } else {
      down = 0;
      up += 1;
      peak = up;
      candies += up;
    }
  }

  return candies;
};

// Test Case #1 -> 7
// const value = [1,3,2,2,1];
// Test Case #2 -> 5
// const value = [1,0,2];
// Test Case #3 -> 4
// const value = [1,2,2];
// Test Case #4 -> 11
// const value = [1,3,4,5,2];
// Test Case #5 -> 9
// const value = [1,2,3,1,0];
// Test Case #6 -> 18
// const value = [1,6,10,8,7,3,2];
// Test Case #7 -> 15
const value = [0,1,2,5,3,2,7];

const result = candy(value);
console.log(result);

// Solution with O(n) additional memory use
// export function candy(ratings: number[]): number {
//   let candies: Array<number> = [];
//   candies[0] = 1;

//   for(let i = 1; i < ratings.length; i++) {
//     if(ratings[i] > ratings[i - 1]) {
//       candies[i] = candies[i - 1] + 1;
//     } else {
//       candies[i] = 1;
//     }
//   }

//   for(let i = ratings.length - 2; i >= 0; i--) {
//     if(ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {  
//       candies[i] = candies[i + 1] + 1;
//     }
//   }

//   return candies.reduce((candy, result) => result + candy, 0);
// };