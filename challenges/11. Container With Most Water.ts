function maxArea(height: number[]): number {
  let start = 0;
  let end = height.length - 1;

  let sum = 0;

  while (start < end) {
    const distance = end - start;
    const minHeight = Math.min(height[start], height[end]); 
    
    if(distance * minHeight > sum) {
      sum = distance * minHeight;
    }

    if(height[start] > height[end]) {
      end--
    } else {
      start++;
    }
  }

  return sum;
};

const value = [1,1];
const result = maxArea(value);
console.log(result);
