function hIndex(citations: number[]): number {
  const numbers = new Array(citations.length + 1).fill(0);

  for (let i = 0; i < citations.length; i++) {
    const element = citations[i];

    const min = Math.min(element, citations.length);

    if(min >= 0) {
      numbers[min] += 1;
    }
  }

  let count = 0;

  for (let i = numbers.length - 1; i > 0; i--) {
    count += numbers[i];
    
    if(count >= i) {
      return i;
    }
  }

  return 0;
};

const value = [1,3,1]

const result = hIndex(value);

console.log(result);