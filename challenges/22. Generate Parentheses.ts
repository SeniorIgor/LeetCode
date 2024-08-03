// Time Complexity: O(2^2n) - raw calculations
// Space Complexity: O(2^2n * n) - raw calculations
function generateParenthesis(n: number): string[] {
    const result: Array<string> = [];

    const backtrack = (count: number, difference: number, combination: string) => {
        if(count === 0 && difference === 0) {
            result.push(combination);
            return;
        }

        if(count < 0) {
            return;
        }

        if(n >= difference) {
            backtrack(count - 1, difference + 1, combination + "(");
        }

        if(difference > 0) {
            backtrack(count - 1, difference - 1, combination + ")");
        }
    }
    
    backtrack(n * 2, 0, "");

    return result;
};

const n = 4;
const result = generateParenthesis(n);
console.log({ result });