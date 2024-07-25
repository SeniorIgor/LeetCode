// Recursive solution
// Time Complexity: O(n!)
// Space Complexity: O(n! * n)
function permute(nums: number[]): number[][] {
    const result: Array<Array<number>> = [];
    const visited = new Set();

    const backtrack = (list: Array<number>) => {
      if(list.length === nums.length) {
        result.push([...list]);
        return;
      }
      
      for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if(visited.has(item)) {
          continue;
        }
        
        list.push(item);
        visited.add(item);
        backtrack(list);
        list.pop();
        visited.delete(item);
      }
    }

    backtrack([]);

    return result;
};

const nums = [1,2,3];
const result = permute(nums);
console.log({ result });
