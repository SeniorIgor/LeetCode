function summaryRanges(nums: number[]): string[] {
  if(!nums.length) {
    return [];
  }
  
  const result: Array<string> = [];
  let start = 0;

  for (let i = 1; i < nums.length; i++) {
    if(nums[i] - nums[i - 1] !== 1) {
      if(start !== i - 1) {
        result.push(`${nums[start]}->${nums[i - 1]}`);
      } else {
        result.push(`${nums[start]}`);
      }

      start = i;
    }
  }

  if(start !== nums.length - 1) {
    result.push(`${nums[start]}->${nums[nums.length - 1]}`);
  } else {
    result.push(`${nums[start]}`);
  }

  return result;
};

const value = [0,2,3,4,6,8,9];
const result = summaryRanges(value);
console.log(result);
