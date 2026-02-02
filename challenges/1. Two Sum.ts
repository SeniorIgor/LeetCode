// TODO: Solve again
export function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    const idx = seen.get(need);

    if (idx !== undefined) {
      return [i, idx]
    }

    seen.set(nums[i], i);
  }

  return [];
};

const value = [2, 7, 11, 15];
const target = 9;
const result = twoSum(value, target);
console.log(result);
