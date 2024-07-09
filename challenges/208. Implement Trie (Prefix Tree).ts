// TODO: Solve again
// N - the number of words
// M - the number of letters
class Trie {
  // Space complexity: O(N * M)
  store: Store;
  
  constructor() {
    this.store = new Store();
  }

  // Time complexity: O(M)
  // Space complexity: O(M)
  insert(word: string): void {
    let node: Store = this.store;
    
    for(const letter of word) {
      if(!node?.children[letter]) {
        node.children[letter] = new Store();
      }

      node = node.children[letter];
    }

    node.isWord = true;
  }

  // Time complexity: O(M)
  // Space complexity: O(1)
  traverse(word: string) {
    let node = this.store;

    for (const letter of word) {
      if(!node.children[letter]) {
        return null;
      }
      
      node = node.children[letter];
    }

    return node;
  }

  // Time complexity: O(M)
  // Space complexity: O(1)
  search(word: string): boolean {
    const result = this.traverse(word);

    return !!result && !!result.isWord;
  }

  // Time complexity: O(M)
  // Space complexity: O(1)
  startsWith(prefix: string): boolean {
    return !!(this.traverse(prefix));
  }
}

class Store {
  children: { [key: string]: Store } = {};
  isWord: boolean = false;
}

const trie = new Trie();
console.log(trie.insert("apple"));
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
console.log(trie.insert("app"));
console.log(trie.search("app"));     // return True