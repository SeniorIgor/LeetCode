// TODO: Solve again
function minSubArrayLen(target: number, nums: number[]): number {
  let length = Number.MAX_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let sum = 0;

  while(end < nums.length) {
    sum += nums[end++];

    while(sum >= target) {
      length = Math.min(length, end - start);
      sum -= nums[start++];
    }
  }

  return length === Number.MAX_SAFE_INTEGER ? 0 : length;
};

const value = [2,3,1,2,4,3];
const target = 7;
const result = minSubArrayLen(target, value);
console.log(result);
