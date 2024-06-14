// TODO: Solve again
export function removeDuplicates(nums: number[]): number {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (index < 2 || nums[index - 2] !== nums[i]) {
      nums[index++] = nums[i];
    }
  }

  return index;
}

const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums), nums);