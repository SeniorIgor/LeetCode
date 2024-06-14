function maxProfit(prices: number[]): number {
  let min = prices[0];
  let maxProfit = 0;

  for(let i = 1; i < prices.length; i++) {
    if(prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    } else if(prices[i] < min) {
      min = prices[i];
    }
  }

  return maxProfit;
};

const prices = [7,1,5,3,6,4];

console.log({ result: maxProfit(prices) });