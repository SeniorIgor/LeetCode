// TODO: Solve again
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let tank = 0;
  let index = 0;
  let sum = 0;

  for (let i = 0; i < gas.length; i++) {
    const difference = gas[i] - cost[i];
    
    tank += difference;

    if(sum < 0 && difference > 0) {
      sum = difference;
      index = i;
    } else {
      sum += difference;
    }
  }

  return tank >= 0 ? index : -1;
};

// TestCase #1
const gas =  [1,2,3,4,5];
const cost = [3,4,5,1,2];
// TestCase #2
// const gas =  [2,3,4];
// const cost = [3,4,3];
// TestCase #3
// const gas =  [5,8,2,8];
// const cost = [6,5,6,6];
const result = canCompleteCircuit(gas, cost);
console.log(result);



// Previous Solution
// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   let totalSum = 0;
//   let sum = 0;
//   let index = 0;

//   for (let i = 0; i < gas.length; i++) {
//     sum += gas[i] - cost[i];
//     totalSum += gas[i] - cost[i];

//     if(sum < 0) {
//       index = i + 1;
//       sum = 0;       
//     }
//   }

//   return totalSum >= 0 ? index : -1;
// };