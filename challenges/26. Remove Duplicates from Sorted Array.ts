export function removeDuplicates(nums: number[]): number {
  let index = 1;

  for(let i = 1; i < nums.length; i++) {
    if(nums[i - 1] !== nums[i]) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log({ k: removeDuplicates(nums), nums });
