export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const outgoingIndex = i - k - 1;

    if (outgoingIndex >= 0) {
      window.delete(nums[outgoingIndex]);
    }

    if (window.has(nums[i])) {
      return true;
    }

    window.add(nums[i]);
  }

  return false;
};

// Test Case #1 -> false
// const value = [1, 2, 3, 1, 2, 3];
// const k = 2;

// Test Case #2 -> true
const value = [1, 2, 3, 1, 2, 3];
const k = 3;
const result = containsNearbyDuplicate(value, k);
console.log(result);
