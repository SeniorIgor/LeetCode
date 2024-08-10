// TODO: Solve again
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubArray(nums: number[]): number {
  let prefix = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];

    if(prefix > max) {
      max = prefix;
    }

    if(prefix < 0) {
      prefix = 0;
    }
  }

  return max;
};

// function maxSubArray(nums: number[]): number {
//   let prefix = nums[0];
//   let max = prefix;

//   for (let i = 1; i < nums.length; i++) {
//     if(prefix + nums[i] < nums[i]) {
//       prefix = nums[i];
//     } else {
//       prefix += nums[i];
//     }

//     if(prefix > max) {
//       max = prefix;
//     }
//   }

//   return max;
// };

const nums = [-2,-1,-3,-4,-1,-2,-1,-5,-4];
const result = maxSubArray(nums);
console.log({ result });