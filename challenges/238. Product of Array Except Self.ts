// TODO: Solve again
export function productExceptSelf(nums: number[]): number[] {
  let multiple = 1;
  let list: Array<number> = new Array(nums.length).fill(1);

  for (let i = 0; i < nums.length; i++) {
    list[i] = multiple;
    multiple *= nums[i];
  }

  multiple = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    list[i] = list[i] * multiple;
    multiple *= nums[i]; 
  }

  return list;
};

const value = [1,2,3,4];
const result = productExceptSelf(value);
console.log(result);
