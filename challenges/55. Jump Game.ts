export function canJump(nums: number[]): boolean {
  let index = 0;

  for(let i = 0; i < nums.length; i++) {
    if(index < i) {
      return false;
    } else if(nums[i] + i > index) {
      index = nums[i] + i;
    }
  }

  return index >= nums.length - 1;
};

const example = [2,2,0,1,4];

console.log(canJump(example));