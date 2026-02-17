// TODO: Solve again
// Time Complexity: O(n)
// Space Complexity: O(n)
export function longestConsecutive(nums: number[]): number {
  const values = new Set<number>(nums);
  let best = 0;

  for (const num of values) {
    if (values.has(num - 1)) {
      continue;
    }

    let length = 1;

    while (values.has(num + length)) {
      length++;
    }

    if (length > best) {
      best = length;
    }
  }

  return best;
};

// Test Case #1
const value = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const result = longestConsecutive(value);
console.log(result);
