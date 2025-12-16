// TODO: Solve again
export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = left;
  let maxRight = right;
  let water = 0;

  while(left < right) {
    if(height[left] > height[maxLeft]) {
      maxLeft = left;
    }

    if(height[right] > height[maxRight]) {
      maxRight = right;
    }

    if(height[left] < height[right]) {
      water += height[maxLeft] - height[left];
      left++;
    } else {
      water += height[maxRight] - height[right];
      right--;
    }
  }

  return water;
};

// Test Case #1 -> 9
// const value = [4,2,0,3,2,5];
// Test Case #2 -> 6
// const value = [0,1,0,2,1,0,1,3,2,1,2,1];
// Test Case #3 -> 1
const value = [4,2,3];
const result = trap(value);
console.log(result);