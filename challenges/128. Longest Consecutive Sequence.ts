// TODO: Solve again
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if(set.has(element + 1)) {
      continue;
    }

    let count = 0;
      
    while(set.has(element - count)) {
      count++;
    }

    result = Math.max(result, count);
  }

  return result;
};

const value = [0,3,7,2,5,8,4,6,0,1];
const result = longestConsecutive(value);
console.log(result);
