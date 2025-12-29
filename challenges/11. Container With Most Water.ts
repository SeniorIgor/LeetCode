export function maxArea(height: number[]): number {
  let first = 0;
  let last = height.length - 1;
  let max = 0;

  while(first < last) {
    const minHight = Math.min(height[first], height[last]);
    const currentMax = minHight * (last - first);

    if(currentMax > max) {
      max = currentMax;
    }

    if(height[first] > height[last]) {
      last--;
    } else {
      first++;
    }
  }

  return max;
}

// Test Case #1
// const value = [1,1];
// Test Case #2
const value = [1,8,6,2,5,4,8,3,7];
const result = maxArea(value);
console.log(result);
