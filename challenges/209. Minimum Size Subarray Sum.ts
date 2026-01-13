export function minSubArrayLen(target: number, nums: number[]): number {
  let first = 0;
  let last = 0;
  let sum = 0;
  let minLength = Number.MAX_SAFE_INTEGER;

  while(last < nums.length) {
    sum += nums[last];
    last++;

    while(sum >= target) {
      minLength = Math.min(minLength, last - first);
      sum -= nums[first];
      first++;
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength;
};

// Test Case #1
// const value = [2,3,1,2,4,3];
// const target = 7;
// Test Case #2
// const value = [1,1,1,1,1,1,1,1];
// const target = 11;
// Test Case #3
const value = [5,1,3,5,10,7,4,9,2,8];
const target = 15;
const result = minSubArrayLen(target, value);
console.log(result);