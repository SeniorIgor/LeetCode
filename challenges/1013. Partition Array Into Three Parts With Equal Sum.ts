export function canThreePartsEqualSum(arr: number[]): boolean {
  const total = arr.reduce((acc, val) => acc + val, 0);

  if (total % 3 !== 0) {
    return false;
  }

  const target = total / 3;
  let sum = 0;
  let partsFound = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    sum += arr[i];

    if (sum === target) {
      sum = 0;
      partsFound++;

      if (partsFound === 2) {
        return true;
      }
    }
  }

  return false;
};

// Test Case #1
const value = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]; // true
const result = canThreePartsEqualSum(value);
// Test Case #2
// const value = [0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1]; // false
// const result = canThreePartsEqualSum(value);
// Test Case #3
// const value = [0, 0, 0, 0]; // true
// const result = canThreePartsEqualSum(value);
console.log(result);
