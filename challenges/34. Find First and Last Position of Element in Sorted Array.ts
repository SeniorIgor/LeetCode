// Iterative solution
// Time Complexity: O(log(n))
// Space Complexity: O(1)
function searchRange(nums: number[], target: number): number[] {
  let start = 0;
  let end = nums.length - 1;

  let lowest = -1;
  let largest = -1;

  while(start <= end) {
    const middle = Math.trunc((start + end) / 2);

    if(target === nums[middle]) {
      lowest = lowest === - 1 ? middle : Math.min(middle, lowest)
      end = middle - 1;

      if(largest === -1) {
        largest = middle;
      }
    } else if(nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  if(largest === -1) {
    return [lowest, largest];
  }

  start = largest + 1;
  end = nums.length - 1;

  while(start <= end) {
    const middle = Math.trunc((start + end) / 2);

    if(target === nums[middle]) {
      largest = Math.max(middle, largest);
      start = middle + 1;
    } else if(nums[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return [lowest, largest];
};

const nums = [5,7,7,8,8,10]; 
const target = 8;
const result = searchRange(nums, target);
console.log({ result });