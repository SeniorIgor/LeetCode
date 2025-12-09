export function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let profit = 0;

  for(let i = 1; i < prices.length; i++) {
    if(prices[i] - minPrice > profit) {
      profit = prices[i] - minPrice;
    } else if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return profit;
};

const prices = [7,1,5,3,6,4];

console.log({ result: maxProfit(prices) });