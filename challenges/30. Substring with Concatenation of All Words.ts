// TODO: Solve again
export function findSubstring(s: string, words: string[]): number[] {
	const freq = new Map<string, number>();

	for (const word of words) {
		freq.set(word, (freq.get(word) || 0) + 1);
	}

	const wordLen = words[0].length;
	const wordCount = words.length;
	const result: number[] = [];

	// Word can start from any index 1 to word.length
	for (let offset = 0; offset < wordLen; offset++) {
		let startIndex = offset;
		let matched = 0;
		const seen = new Map<string, number>();

		for (let index = startIndex; index <= s.length - wordLen; index += wordLen) {
			const word = s.slice(index, index + wordLen);

			if (freq.has(word)) {
				seen.set(word, (seen.get(word) || 0) + 1);
				matched++;

				while (seen.get(word)! > freq.get(word)!) {
					let leftWord = s.slice(startIndex, startIndex + wordLen);
					seen.set(leftWord, seen.get(leftWord)! - 1);
					startIndex += wordLen;
					matched--;
				}

				if (matched === wordCount) {
					result.push(startIndex);
				}
			} else {
				seen.clear();
				matched = 0;
				startIndex = index + wordLen;
			}
		}
	}

	return result;
}

// Test Case #1
// const s = "barfoothefoobarman";
// const words = ["foo","bar"];
// Test Case #2
// const s = "wordgoodgoodgoodbestword";
// const words = ["word","good","best","word"];
// Test Case #3
// const s = 'barfoofoobarthefoobarman';
// const words = ['bar', 'foo', 'the'];
// Test Case #4
const s = 'lingmindraboofooowingdingbarrwingmonkeypoundcake';
const words = ['fooo', 'barr', 'wing', 'ding', 'wing'];

const result = findSubstring(s, words);
console.log(result);

// barfoothefoobarman
//   |

// ["foo","bar"]
//   |

//   f: [foo]
//  fo: [foo]
// foo: [foo]

//   b: [bar]
//  ba: [bar]
// bar: [bar]
