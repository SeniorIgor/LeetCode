class MyListNode {
  constructor(
    public key: number,
    public next: MyListNode | null = null
  ) { }
}

export class MyHashSet {
  private readonly size = 10_007;
  private readonly buckets: MyListNode[];

  constructor() {
    this.buckets = Array.from({ length: this.size }, () => new MyListNode(-1));
  }

  private hash(key: number): number {
    return key % this.size;
  }

  private findWithParent(key: number): { parent: MyListNode; node: MyListNode | null } {
    const bucketIndex = this.hash(key);
    let parent = this.buckets[bucketIndex];
    let node = parent.next;

    while (node !== null && node.key !== key) {
      parent = node;
      node = node.next;
    }

    return { parent, node };
  }

  add(key: number): void {
    const { node, parent } = this.findWithParent(key);

    if (node) {
      return;
    }

    parent.next = new MyListNode(key);
  }

  remove(key: number): void {
    const { node, parent } = this.findWithParent(key);

    if (!node) {
      return;
    }

    parent.next = node.next;
  }

  contains(key: number): boolean {
    return this.findWithParent(key).node !== null;
  }
}

const obj = new MyHashSet();
console.log(obj.add(1));
console.log(obj.add(2));
console.log(obj.contains(1)); // True
console.log(obj.contains(3)); // False
console.log(obj.add(2));
console.log(obj.contains(2)); // True
console.log(obj.remove(2));
console.log(obj.contains(2)); // False

// Another Solution 1
// class MyHashSet {
//   store = Object.create(null);

//   add(key: number): void {
//     this.store[key] = true;
//   }

//   remove(key: number): void {
//     this.store[key] = false;
//   }

//   contains(key: number): boolean {
//     return !!this.store[key];
//   }
// }
// Another Solution 2
// class MyHashSet {
//   private storage: boolean[];

//   constructor() {
//     this.storage = new Array(1_000_001).fill(false);
//   }

//   add(key: number): void {
//     this.storage[key] = true;
//   }

//   remove(key: number): void {
//     this.storage[key] = false;
//   }

//   contains(key: number): boolean {
//     return this.storage[key];
//   }
// }
// Another Solution 3
// class MyHashSet {
//   private size = 1000;
//   private buckets: number[][];

//   constructor() {
//     this.buckets = Array.from({ length: this.size }, () => []);
//   }

//   hash(key: number) {
//     return key % this.size;
//   }

//   add(key: number): void {
//     const bucketId = this.hash(key);
//     if (!this.buckets[bucketId].includes(key)) {
//       this.buckets[bucketId].push(key);
//     }
//   }

//   remove(key: number): void {
//     const bucketId = this.hash(key);
//     const bucket = this.buckets[bucketId];
//     const idx = bucket.indexOf(key);

//     if (idx !== -1) {
//       bucket.splice(idx, 1);
//     }
//   }

//   contains(key: number): boolean {
//     const bucketId = this.hash(key)
//     return this.buckets[bucketId].includes(key);
//   }
// }