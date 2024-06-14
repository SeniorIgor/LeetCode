export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let length = m + n - 1;

  while (length >= 0) {
    if (j < 0 || nums1[i] > nums2[j]) {
      nums1[length--] = nums1[i--];
    } else {
      nums1[length--] = nums2[j--];
    }
  }
}