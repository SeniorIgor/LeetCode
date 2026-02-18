export function summaryRanges(nums: number[]): string[] {
  const result: Array<string> = [];

  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];

    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i++;
    }

    if (start === nums[i]) {
      result.push(String(start));
    } else {
      result.push(`${start}->${nums[i]}`);
    }
  }

  return result;
};

// Test Case #1 -> [ '0', '2->4', '6', '8->9' ]
const value = [0, 2, 3, 4, 6, 8, 9];
const result = summaryRanges(value);
console.log(result);
