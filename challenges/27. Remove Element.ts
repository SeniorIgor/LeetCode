export function removeElement(nums: Array<number | undefined>, val: number): number {
  let first = 0;
  let second = nums.length;

  while (first !== second) {
    if (nums[first] === val) {
      nums[first] = nums[second - 1];
      second--;
    } else {
      first++;
    }
  }

  return second;
}
