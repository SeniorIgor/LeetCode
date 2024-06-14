// TODO: Solve again
function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalSum = 0;
  let sum = 0;
  let index = 0;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];

    if(sum < 0) {
      index = i + 1;
      sum = 0;       
    }
  }

  return totalSum >= 0 ? index : -1;
};

const gas =  [1,2,3,4,5];
const cost = [3,4,5,1,2];
const result = canCompleteCircuit(gas, cost);
console.log(result);