// TODO: Solve again
export function minWindow(s: string, t: string): string {
	const freq = new Map();

	for (let letter of t) {
		freq.set(letter, (freq.get(letter) || 0) + 1);
	}

	let left = 0;
	let counter = 0;
	let result = '';
	let subLen = Number.MAX_SAFE_INTEGER;

	for (let right = 0; right < s.length; right++) {
		const letter = s[right];
		const count = freq.get(letter);

		if (count !== undefined) {
			freq.set(letter, count - 1);

			if (count > 0) {
				counter++;
			}

			while (!freq.has(s[left]) || freq.get(s[left]) < 0) {
				if (freq.has(s[left])) {
					freq.set(s[left], freq.get(s[left]) + 1);
				}

				left++;
			}

			if (counter === t.length && right + 1 - left < subLen) {
				subLen = right + 1 - left;
				result = s.slice(left, right + 1);
			}
		}
	}

	return result;
}

// Test Case #1 -> BANC
// const value = 'ADOBECODEBANC';
// const words = 'ABC';
// Test Case #2 -> baca
// const value = 'acbbaca';
// const words = 'aba';
// Test Case #3 -> abbbbbcdd
// const value = 'aaaaaaaaaaaabbbbbcdd';
// const words = 'abcdd';
// Test Case #4 -> ab
// const value = 'bdab';
// const words = 'ab';
// Test Case #5 -> ""
const value = 'a';
const words = 'b';
const result = minWindow(value, words);
console.log({ result });

// Another Solution
// export function minWindow(s: string, t: string): string {
// 	const freq = new Map();

// 	for (let letter of t) {
// 		freq.set(letter, (freq.get(letter) || 0) + 1);
// 	}

// 	let left = 0;
// 	let bestStart = 0;
// 	let matched = 0;
// 	let minLen = Number.MAX_SAFE_INTEGER;

// 	for (let right = 0; right < s.length; right++) {
// 		const letter = s[right];

// 		if (freq.has(letter)) {
// 			const count = freq.get(letter);
// 			freq.set(letter, count - 1);

// 			if (count > 0) {
// 				matched++;
// 			}

// 			while (!freq.has(s[left]) || freq.get(s[left]) < 0) {
// 				if (freq.has(s[left])) {
// 					freq.set(s[left], freq.get(s[left]) + 1);
// 				}

// 				left++;
// 			}

// 			if (matched === t.length && right + 1 - left < minLen) {
// 				minLen = right + 1 - left;
// 				bestStart = left;
// 			}
// 		}
// 	}

// 	return minLen === Number.MAX_SAFE_INTEGER ? '' : s.slice(bestStart, bestStart + minLen);
// }
