function jump(nums: number[]): number {
  let count = 0;
  let max = 0;
  let preIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    
    if(i > preIndex) {
      count++;
      preIndex = max;
    }

    max = Math.max(i + element, max);
  }

  return count;
};

const value = [2,3,0,1,4];

const result = jump(value);

console.log(result);
