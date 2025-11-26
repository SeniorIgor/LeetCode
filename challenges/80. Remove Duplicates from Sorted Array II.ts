export function removeDuplicates(nums: number[]): number {
  let start = 0;
  let result = 1;

  for(let i = 1; i < nums.length; i++) { 
    if(nums[start] !== nums[i]) {
      nums[result] = nums[i];
      result++;
      start = i;
    } else if(i - start < 2) {
      nums[result] = nums[i];
      result++;
    }
  }

  return result;
}

const nums = [0,0,1,1,1,1,2,3,3];
console.log(removeDuplicates(nums), nums);

// [0,0,0,0,1,1,1,1,2,3,3,3,4]
// [0,0,0,0,1,1,1,1,2,3,3,3,4]
//S |
//i   |
//R   |

// Previous Solution
// TODO: Solve again
// export function removeDuplicates(nums: number[]): number {
//   let index = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (index < 2 || nums[index - 2] !== nums[i]) {
//       nums[index++] = nums[i];
//     }
//   }

//   return index;
// }