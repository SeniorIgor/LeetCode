class BucketNode {
  constructor(
    public key: number,
    public value: number,
    public next: BucketNode | null = null
  ) { }
}

export class MyHashMap {
  private readonly size = 10_007; // prime
  private readonly buckets: BucketNode[];

  constructor() {
    this.buckets = Array.from({ length: this.size }, () => new BucketNode(-1, -1));
  }

  private hash(key: number): number {
    return key % this.size;
  }

  private findWithParent(key: number): { parent: BucketNode; node: BucketNode | null } {
    const bucketIndex = this.hash(key);
    let parent = this.buckets[bucketIndex];
    let node = parent.next;

    while (node !== null && node.key !== key) {
      parent = node;
      node = node.next;
    }

    return { parent, node };
  }

  put(key: number, value: number): void {
    const { node, parent } = this.findWithParent(key);

    if (node !== null) {
      node.value = value;
      return;
    }

    parent.next = new BucketNode(key, value);
  }

  remove(key: number): void {
    const { node, parent } = this.findWithParent(key);

    if (node === null) {
      return;
    }

    parent.next = node.next;
  }

  get(key: number): number {
    const { node } = this.findWithParent(key);

    return node !== null ? node.value : -1;
  }
}

const obj = new MyHashMap();
console.log(obj.put(1, 1));
console.log(obj.put(2, 2));
console.log(obj.get(1)); // 1
console.log(obj.get(3)); // -1
console.log(obj.put(2, 1));
console.log(obj.get(2)); // 1
console.log(obj.remove(2));
console.log(obj.get(2)); // -1

// Another Solution
// export class MyHashMap {
//   storage: Object;

//   constructor() {
//     this.storage = Object.create(null);
//   }

//   put(key: number, value: number): void {
//     this.storage[key] = value;
//   }

//   get(key: number): number {
//     const exist = this.storage[key] !== undefined;
//     return exist ? this.storage[key] : -1;
//   }

//   remove(key: number): void {
//     delete this.storage[key];
//   }
// }