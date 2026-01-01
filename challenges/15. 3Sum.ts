// TODO: Solve again
export function threeSum(nums: number[]): number[][] {
  const result: Array<Array<number>> = [];

  nums.sort((a, b) => a - b);

  for(let i = 0; i < nums.length - 2; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let first = i + 1;
    let last = nums.length - 1;

    while (first < last) {
      const sum = nums[first] + nums[last] + nums[i];

      if(sum > 0) {
        last--;
      } else if(sum < 0) {
        first++;
      } else {
        result.push([nums[i], nums[first], nums[last]]);

        first++;
        last--;

        while(nums[first] === nums[first - 1]) {
          first++;
        }

        while(nums[last] === nums[last + 1]) {
          last--;
        }
      }
    }
  }

  return result;
};

// Test Case #1
// const value = [-1,0,1,2,-1,-4];
// Test Case #2
// const value = [0,0,0];
// Test Case #3
const value = [-100,-70,-60,110,120,130,160];
const result = threeSum(value);
console.log(result);


// [-2,0,1,1,2]
//   | | |
//   | |   |
//   | |     |
//   |   | |
//   |   |   |
//   |     | |
//     | | |
//     | |   |
//       | | |

// Previous Solution
// function threeSum(nums: number[]): number[][] {
//   const result: Array<Array<number>> = [];

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 2; i++) {
//     const target = 0 - nums[i];
//     let start = i + 1;
//     let end = nums.length - 1;

//     if(i === 0 || nums[i] !== nums[i - 1]) {
//       while (start < end) {
//         const sum = nums[start] + nums[end]; 
  
//         if(sum > target) {
//           end--;
//         } else if (sum < target) {
//           start++;
//         } else {
//           result.push([nums[i], nums[start], nums[end]]);
//           const startValue = nums[start];
//           const endValue = nums[start];
  
//           // Skip duplicates
//           while(start < end && nums[start] === startValue) {
//             start++;
//           }
  
//           while (start < end && nums[end] === endValue) {
//             end--;
//           }
//         }
//       }
//     }
//   }

//   return result;
// };