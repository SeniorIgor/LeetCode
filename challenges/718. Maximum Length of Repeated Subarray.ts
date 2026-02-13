// Time Complexity: O(m * n)
// Space Complexity: O(m)
export function findLength(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const m = nums2.length;
  const dp = new Array(m + 1).fill(0);
  let maxLength = 0;

  for (let i = 0; i < n; i++) {
    for (let j = m; j > 0; j--) {

      if (nums1[i] === nums2[j - 1]) {
        const value = dp[j - 1] + 1;
        dp[j] = value;

        if (value > maxLength) {
          maxLength = value;
        }
      } else {
        dp[j] = 0;
      }
    }
  }

  return maxLength;
};

// Test Case 1
// const nums1 = [1, 2, 3, 2, 1];
// const nums2 = [3, 2, 1, 4, 7];
// Test Case 2
const nums1 = [1, 0, 1, 0, 0, 0, 0, 0, 1, 1];
const nums2 = [1, 1, 0, 1, 1, 0, 0, 0, 0, 0];
const result = findLength(nums1, nums2);
console.log(result);

// Another Approach
// Space Complexity: O(m * n)
// export function findLength(nums1: number[], nums2: number[]): number {
//   const matrix = Array.from({ length: nums1.length + 1 }, () => new Array(nums2.length + 1).fill(0));
//   let maxLength = 0;

//   for (let i = 1; i <= nums1.length; i++) {
//     for (let j = 1; j <= nums2.length; j++) {

//       if (nums1[i - 1] === nums2[j - 1]) {
//         const value = matrix[i - 1][j - 1] + 1;
//         matrix[i][j] = value;

//         maxLength = Math.max(value, maxLength);
//       }
//     }
//   }

//   return maxLength;
// };
