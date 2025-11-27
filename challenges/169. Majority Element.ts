// TODO: Solve again
export function majorityElement(nums: number[]): number {
  let value = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === value) {
      count++;
    } else if(count === 0) {
      value = nums[i];
      count++;
    } else {
      count--;
    }
  }

  return value;
}

const value = [3, 2, 3];

const result = majorityElement(value);

console.log({ result });
