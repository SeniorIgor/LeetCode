// Time Complexity: O(log(n))
// Space Complexity: O(1)
function findPeakElement(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    const middle = Math.trunc((start + end) / 2);
    const leftIsSmaller = middle - 1 < 0 || nums[middle] > nums[middle - 1];
    const rightIsSmaller = middle + 1 > nums.length - 1 || nums[middle] > nums[middle + 1];

    if(leftIsSmaller && rightIsSmaller) {
      return middle;
    } else if(leftIsSmaller) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }

  return -1;
};

const nums = [3,2];
const result = findPeakElement(nums);
console.log({ result });