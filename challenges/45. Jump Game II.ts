export function jump(nums: number[]): number {
  let count = 0;
  let index = 0;
  let nextIndex = nums[0];

  for(let i = 0; i < nums.length; i++) {
    if(index >= nums.length - 1) {
      return count;
    } else if(nums[i] + i > nextIndex){
      nextIndex = nums[i] + i;
    }

    if(index === i) {
      count++;
      index = nextIndex;
    }
  }

  return count;
};

const value = [2,3,0,1,4];

const result = jump(value);

console.log(result);

// [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3] => 2
// [1,1,1,1] => 3
// [0] => 0
// [2,3,1,1,4] => 2
// [2,3,0,1,4] => 2