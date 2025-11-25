export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let finalIndex = m + n - 1;
  let first = m - 1;
  let second = n - 1;

  while(second >= 0) {
    if(nums1[first] >= nums2[second]) {
      nums1[finalIndex] = nums1[first];
      first--;
    } else {
      nums1[finalIndex] = nums2[second];
      second--;
    }
    finalIndex--;
  }
};
