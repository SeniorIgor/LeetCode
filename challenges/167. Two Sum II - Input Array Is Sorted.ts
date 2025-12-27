export function twoSum(numbers: number[], target: number): number[] {
  let first = 0;
  let last = numbers.length - 1;

  while(first < last) {
    const sum = numbers[first] + numbers[last];
    
    if(sum > target) {
      last--;
    } else if(sum < target) {
      first++;
    } else {
      return [first + 1, last + 1];
    }
  }

  return [];
};

// Test Case #1
// const value = [-1,0];
// const target = -1;
// Test Case #2
// const value = [1,2,3,7,11,15];
// const target = 9;
// Test Case #3
const value = [1,2,3,4,4,9,56,90];
const target = 8;
const result = twoSum(value, target);
console.log(result);