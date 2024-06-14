function twoSum(numbers: number[], target: number): number[] {
  let start = 0;
  let end = numbers.length - 1;
  
  while (start < end) {
    const result = numbers[start] + numbers[end];

    if(result === target) {
      return [start + 1, end + 1];
    } else if(numbers[start] + numbers[end] > target) {
      end--;
    } else {
      start++;
    }
  }

  return [];
};

const value = [-1,0];
const target = -1;
const result = twoSum(value, target);
console.log(result);
