// Iterative Solution
// Time Complexity: O(log(n))
// Space Complexity: O(1)
function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while(start < end) {
    const middle = Math.trunc((end + start) / 2);
    const value = nums[middle];

    if(value === target) {
      return middle;
    } else if(value > target) {
      end = middle - 1;
    } else{
      start = middle + 1;
    }
  }

  return nums[start] >= target ? start : start + 1;
};

// Recursive Solution
// Time Complexity: O(log(n))
// Space Complexity: O(log(n))
// function searchInsert(nums: number[], target: number, start: number = 0, end: number = nums.length - 1): number {
//     const middle = Math.trunc((end + start) / 2);
//     const value = nums[middle];

//     if(value === target) {
//       return middle;
//     }

//     if(start >= end) {      
//       return nums[start] > target ? start : start + 1;
//     }
    
//     if(value < target) {
//       return searchInsert(nums, target, middle + 1, end);
//     } else {
//       return searchInsert(nums, target, start, middle - 1);
//     }
// };

// const nums = [1,3,5,6];
// const target = 7;
const nums = [1];
const target = 1;
// const nums = [1,3];
// const target = 0;
// const nums = [1,3,5,6];
// const target = 2;
const result = searchInsert(nums, target);
console.log({ result });