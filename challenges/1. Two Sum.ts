// TODO: Solve again
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    const value = map.get(difference);

    if(value !== undefined) {
      return [value, i];
    }

    map.set(nums[i], i);
  }

  return [];
};

const value = [2,7,11,15];
const target = 9;
const result = twoSum(value, target);
console.log(result);
