export function removeElement(nums: Array<number | undefined>, val: number): number {
  let index = 0;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }

  return index;
}

const nums = [0,1,2,2,3,0,4,2];
const val = 2;
console.log({ k: removeElement(nums, val), result: nums });
