function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const prevIndex = map.get(nums[i]);

    if(prevIndex !== undefined && i - prevIndex <= k) {
      return true;
    }
    
    map.set(nums[i], i);
  }

  return false;
};

const value = [1,2,3,1,2,3];
const k = 3;
const result = containsNearbyDuplicate(value, k);
console.log(result);
