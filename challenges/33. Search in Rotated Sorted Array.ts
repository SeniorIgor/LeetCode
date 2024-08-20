// TODO: Solve again
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
    const middle = Math.trunc((start + end) / 2);

    if(nums[middle] === target) {
      return middle;
    } else if(nums[start] <= nums[middle]) {
      if(target < nums[middle] && target >= nums[start]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if(target > nums[middle] && target <= nums[end]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }

  return -1;
};

// function search(nums: number[], target: number): number {
//   const length = nums.length;
//   const isRotated = nums[0] > nums[length - 1];
//   let start = 0;
//   let end = length - 1;

//   if(isRotated) {
//     while(start < end) {
//       const middle = Math.trunc((start + end) / 2);

//       if(nums[middle] > nums[end]) {
//         start = middle + 1;
//       } else {
//         end = middle;
//       }
//     }
//   }

//   const rotate = start;

//   if(nums[rotate] <= target && target <= nums[length - 1]) {
//     start = rotate;
//     end = length - 1;
//   } else {
//     start = 0;
//     end = rotate - 1;
//   }

//   while(start <= end) {
//     const middle = Math.trunc((start + end) / 2);

//     if(nums[middle] === target) {
//       return middle;
//     } else if(nums[middle] < target) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }

//   return -1;
// };

// const nums = [4,5,1,2,3]; 
// const target = 1;
const nums = [6,7,1,2,3,4,5]; 
const target = 6;
// const nums = [3,4,5,6,7,1,2]; 
// const target = 4;
const result = search(nums, target);
console.log({ result });