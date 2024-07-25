// Time complexity: O(n ^ target/min(candidates))
// Space complexity: O(target/min(candidates))
// n - number of candidates
// 
function combinationSum(candidates: number[], target: number): number[][] {
    const result: Array<Array<number>> = [];
    const length = candidates.length;

    const backtrack = (list: Array<number>, index: number, sum: number) => {
      if(sum === target) {
        result.push([...list]);
        return;
      }

      for (let i = index; i < length; i++) {
        const item = candidates[i];

        if(sum + item > target) {
          continue;
        }
        
        list.push(item);
        backtrack(list, i, sum + item);
        list.pop();
      }
    }

    backtrack([], 0, 0);

    return result;
};

const candidates = [2,3,6,7];
const target = 7;
const result = combinationSum(candidates, target);
console.log({ result });
