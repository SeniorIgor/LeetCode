function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let totalWater = 0;

  while (left < right) {
    if(height[left] > maxLeft) {
      maxLeft = height[left];
    }

    if(height[right] > maxRight) {
      maxRight = height[right];
    }

    if(maxLeft >= maxRight) {
      totalWater += Math.max(0, maxRight - height[right]);
      right--;
    } else {
      totalWater += Math.max(0, maxLeft - height[left]);
      left++;
    }
  }

  return totalWater;
};

const value = [4,2,0,3,2,5];
const result = trap(value);
console.log(result);