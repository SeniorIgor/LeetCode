// TODO: Solve again
// DFS
// N - the number of words
// M - the number of letters
// B - 26 letters
interface Store { children: { [letter: string]: Store }, isWord: boolean } 

class WordDictionary {
  // Space Complexity: O(N * M)
  store: Store;
  
  constructor() {
    this.store = { children: {}, isWord: false } 
  }

  // Time Complexity: O(M)
  // Space Complexity: O(M)
  addWord(word: string): void {
    let node = this.store;

    for(const letter of word) {
      if(!node.children[letter]) {
        node.children[letter] = { children: {}, isWord: false } 
      }

      node = node.children[letter];
    }

    node.isWord = true;
  }

  search(word: string): boolean {
    return this.traverse(word, 0, this.store);
  }

  // Time Complexity: O(B ^ M)
  // Space Complexity: O(M) - recursion
  traverse(word: string, index: number, store: Store): boolean {
    if(index === word.length) {
      return store.isWord;
    }
    
    const letter = word[index];

    if(letter === '.') {
      const values = Object.values(store.children);

      for (const node of values) {
        if(this.traverse(word, index + 1, node)) {
          return true;
        }
      }
    } else if(store.children[letter]) {
      if(this.traverse(word, index + 1, store.children[letter])) {
        return true;
      }
    }

    return false;
  }
}

// BFS
// class WordDictionary {
//   store: Store;
  
//   constructor() {
//     this.store = new Store();
//   }

//   addWord(word: string): void {
//     let node = this.store;

//     for(const letter of word) {
//       if(!node.children[letter]) {
//         node.children[letter] = new Store();
//       }

//       node = node.children[letter];
//     }

//     node.isWord = true;
//   }

//   search(word: string): boolean {
//     const queue: Array<[Store, number]> = [[this.store, 0]];

//     while(queue.length) {
//       const [node, i] = queue.shift() || [] as unknown as [Store, number];

//       const letter = word[i];
      
//       if(letter === '.') {
//         for(const store of Object.values(node.children)) {    
//           if(i === word.length - 1) {
//             if(store.isWord) {
//               return true;
//             }
//           } else {
//             queue.push([store, i + 1]);
//           }
//         }
//       } else if(node.children[letter]) {
//         if(i === word.length - 1) {
//           if(node.children[letter].isWord) {
//             return true;
//           }
//         } else {
//           queue.push([node.children[letter], i + 1]);
//         }
//       }
//     }

//     return false;
//   }
// }

// class Store {
//   children: { [key: string]: Store } = {}; 
//   isWord: boolean = false;
// }

const wordDictionary = new WordDictionary();
console.log(wordDictionary.addWord("bad"));
console.log(wordDictionary.addWord("dad"));
console.log(wordDictionary.addWord("mad"));
console.log(wordDictionary.search("pad")); // return False
console.log(wordDictionary.search("bad")); // return True
console.log(wordDictionary.search(".ad")); // return True
console.log(wordDictionary.search("b..")); // return True