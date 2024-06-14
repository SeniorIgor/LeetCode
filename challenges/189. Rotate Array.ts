function reverse(nums: number[], start: number, end: number) {
  while(start < end) {
    const elem = nums[start];
    nums[start] = nums[end];
    nums[end] = elem;

    start++;
    end--;
  }
}

function rotate(nums: number[], k: number): void {
  k %= nums.length;
  
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};

const value = [1,2,3,4,5,6,7];

rotate(value, 3);

console.log({ value });