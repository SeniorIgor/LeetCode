// BFS
// Time Complexity: O(N * M)
// Space Complexity: O(N)
// N - the number of words
// M - the number of letters in the word
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  const words = new Set(wordList);

  if(!words.has(endWord)) {
    return 0;
  }

  const visited = new Set([beginWord, endWord]);
  let beginSet: Set<string> = new Set([beginWord]);
  let endSet: Set<string> = new Set([endWord]);
  let length = 1;

  while(beginSet.size && endSet.size) {
    if(beginSet.size > endSet.size) {
      [beginSet, endSet] = [endSet, beginSet];
    }

    const nextSet: Set<string> = new Set();

    for(const word of beginSet) {
      const letterArray = word.split('');

      for(let i = 0; i < letterArray.length; i++) {
        const originalChar = letterArray[i];

        for(let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
          letterArray[i] = String.fromCharCode(j);
          const newWord = letterArray.join('');

          if(endSet.has(newWord)) {
            return length + 1;
          }

          if(words.has(newWord) && !visited.has(newWord)) {
            nextSet.add(newWord);
            visited.add(newWord);
          }
        }

        letterArray[i] = originalChar;
      }
    }

    beginSet = nextSet;
    length++;
  }

  return 0;
};

// BFS (Simple Solution)
// Time complexity O(N * M^2)
// Space complexity O(N)
// N - the number of words
// M - the number of letters in the word
// function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
//   const words = new Set(wordList);
//   const queue: Array<[string, number]> = [[beginWord, 1]];
//   const visited = new Set([beginWord]);

//   while(queue.length) {
//     const [word, steps] = queue.shift() || ['', 0];

//     for(let i = 0; i < word.length; i++) {
//       for(let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
//         const letter = String.fromCharCode(j);
//         const newWord = `${word.slice(0, i)}${letter}${word.slice(i + 1)}`; // M - concatenating go through all letters 

//         if(!words.has(newWord) || visited.has(newWord)) {
//           continue;
//         }

//         if(newWord === endWord) {
//           return steps + 1;
//         } else {
//           queue.push([newWord, steps + 1]);
//           visited.add(newWord);
//         }
//       }
//     }
//   }

//   return 0;
// };

const beginWord = "hit"; 
const endWord = "cog"; 
const wordList = ["hot","dot","dog","lot","log", "cog"];

const result = ladderLength(beginWord, endWord, wordList);
console.log({ result })
