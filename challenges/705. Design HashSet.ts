class MyHashSet {
  store = Object.create(null);

  add(key: number): void {
    this.store[key] = true;
  }

  remove(key: number): void {
    this.store[key] = false;
  }

  contains(key: number): boolean {
    return !!this.store[key];
  }
}

const obj = new MyHashSet();
console.log(obj.add(1));
console.log(obj.add(2));
console.log(obj.contains(1));
console.log(obj.contains(3));
console.log(obj.add(2));
console.log(obj.contains(2));
console.log(obj.remove(2));
console.log(obj.contains(2));

// Another Solution
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
