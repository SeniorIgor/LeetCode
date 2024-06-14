export function removeDuplicates(nums: number[]): number {
  let index = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[++index] = nums[i];
    }
  }

  return index + 1;
}

const value = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const result = removeDuplicates(value);

console.log({ result, value });
