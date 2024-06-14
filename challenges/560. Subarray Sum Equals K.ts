// TODO: Solve again
function subarraySum(nums: number[], k: number): number {
  const sums = { "0": 1 };
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    
    const difference = sum - k;
    
    if(sums[difference]) {
      count = count + sums[difference];
    }
    
    sums[sum] = (sums[sum] || 0) + 1;
  }

  return count;
};

const value = [1,2,3];
const k = 3;
const result = subarraySum(value, k);
console.log(result);
