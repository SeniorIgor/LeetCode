// TODO: Solve again
function threeSum(nums: number[]): number[][] {
  const result: Array<Array<number>> = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const target = 0 - nums[i];
    let start = i + 1;
    let end = nums.length - 1;

    if(i === 0 || nums[i] !== nums[i - 1]) {
      while (start < end) {
        const sum = nums[start] + nums[end]; 
  
        if(sum > target) {
          end--;
        } else if (sum < target) {
          start++;
        } else {
          result.push([nums[i], nums[start], nums[end]]);
          const startValue = nums[start];
          const endValue = nums[start];
  
          // Skip duplicates
          while(start < end && nums[start] === startValue) {
            start++;
          }
  
          while (start < end && nums[end] === endValue) {
            end--;
          }
        }
      }
    }
  }

  return result;
};

const value = [-1,0,1,2,-1,-4];
const result = threeSum(value);
console.log(result);


// [-2,0,1,1,2]
//   | | |