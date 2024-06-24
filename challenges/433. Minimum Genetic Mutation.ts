// TODO: Solve again
// BFS (Simple solution)
// Time complexity: O(N * M)
// Space complexity: O(N)
function minMutation(startGene: string, endGene: string, bank: string[]): number {
  const letters = ['A', 'C', 'G', 'T'];
  const queue: Array<[string, number]> = [[startGene, 0]];
  const visited = new Set([startGene]);
  const mutations = new Set(bank);

  while(queue.length) {
    const [currentGene, steps] = queue.shift() || ['', 0];

    for (let i = 0; i < currentGene.length; i++) {
      for(const letter of letters) {
        if(letter === currentGene[i]) {
          continue;
        }

        const mutation = `${currentGene.slice(0, i)}${letter}${currentGene.slice(i + 1)}`;

        if(mutations.has(mutation) && !visited.has(mutation)) {
          if(mutation === endGene) {
            return steps + 1;
          }

          visited.add(mutation);
          queue.push([mutation, steps + 1]);
        }
      }
    }
  }

  return -1;
};

// BFS (Top solution)
// Time complexity: O(N^2 * M)
// Space complexity: O(N)
// function minMutation(startGene: string, endGene: string, bank: string[]): number {
//     const queue: Array<[string, number]> = [[startGene, 0]];

//     if(startGene === endGene) {
//       return 0;
//     }

//     const visited = new Set([startGene]);

//     while(queue.length) {
//       const [currentGene, steps] = queue.shift() || ['', 0];

//       for(const mutation of bank) {
//         let count = 0;

//         if(visited.has(mutation)) {
//           continue;
//         }
  
//         for (let i = 0; i < mutation.length; i++) {
//           if(mutation[i] !== currentGene[i]) {
//             count++;
//           }
//         }
  
//         if(count === 1) {
//           if(mutation === endGene) {
//             return steps + 1;
//           }

//           visited.add(mutation);
//           queue.push([mutation, steps + 1]);
//         }
//       }
//     }

//     return -1;
// };


const startGene = "AAAAAAAA"; 
const endGene = "CCCCCCCC"; 
const bank = ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA"];

// const startGene = "AACCGGTT"; 
// const endGene = "AAACGGTA"; 
// const bank = ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"];

const result = minMutation(startGene, endGene, bank);
console.log({ result })


// startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]
// AACCGGTT
// AACCGATT
// AACCGATA
// AAACGATA
// AAACGGTA



// AAACGGTT | AACCGGTA
// AAACGGTA