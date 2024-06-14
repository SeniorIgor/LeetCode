// TODO: Solve again
function productExceptSelf(nums: number[]): number[] {
  const result: Array<number> = [];
  let current = 1; // prefix or suffix

  result[0] = 1;

  for (let i = 1; i < nums.length; i++) {
    current = current * nums[i - 1];    
    result[i] = current;
  }

  current = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    current = current * nums[i + 1];    
    result[i] = result[i] * current;
  }

  return result;
};

const value = [1,2,3,4];
const result = productExceptSelf(value);
console.log(result);
