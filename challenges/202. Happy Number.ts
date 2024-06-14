// TODO: Solve again
function isHappy(n: number): boolean {
  const set = new Set();
  let num = n;

  while(num !== 1) {
    set.add(num);

    num = digitSquareSum(num)

    if(set.has(num)) {
      return false;
    }
  }

  return true;
};

function digitSquareSum(number: number) {
  const digits = String(number).split('');

  let result = digits.reduce((res, digit) => {
    return res += (+digit * +digit);
  }, 0);

  return result;
}

const value = 2;
const result = isHappy(value);
console.log(result);
