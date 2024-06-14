function canJump(nums: number[]): boolean {
  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if(index < i) {
      return false;
    }
    
    index = Math.max(index, nums[i] + i);
  }

  return index >= nums.length - 1;
};

const example = [3,2,1,0,4];

console.log(canJump(example));
