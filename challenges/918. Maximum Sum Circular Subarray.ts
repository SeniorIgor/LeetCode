// TODO: Solve again
// Time Complexity: O(n)
// Space Complexity: O(1)
function maxSubarraySumCircular(nums: number[]): number {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let minSum = Number.MAX_SAFE_INTEGER;

    let localMaxSum = 0;
    let localMinSum = 0;
    let total = 0;

    for (let i = 0; i < nums.length; i++) {
      localMaxSum = Math.max(localMaxSum + nums[i], nums[i]);
      localMinSum = Math.min(localMinSum + nums[i], nums[i]);
      total += nums[i];
      
      if(maxSum < localMaxSum) {
        maxSum = localMaxSum;
      }

      if(minSum > localMinSum) {
        minSum = localMinSum;
      }
    }

    if(maxSum < 0) {
      return maxSum;
    }

    return Math.max(maxSum, total - minSum);
};

const nums = [-5,-3,-5];
const result = maxSubarraySumCircular(nums);
console.log({ result });