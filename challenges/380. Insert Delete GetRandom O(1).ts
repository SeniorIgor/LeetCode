export class RandomizedSet {
  set: Set<number>;

  constructor() {
    this.set = new Set();
  }

  insert(val: number): boolean {
    const result = this.set.has(val);

    if(!result) {
      this.set.add(val);
    }

    return !result;
  }

  remove(val: number): boolean {
    return this.set.delete(val);
  }

  getRandom(): number {
    const array = Array.from(this.set.values());
    const size = this.set.size;

    if(!size) {
      return 0;
    }

    const randomValue = Math.floor(Math.random() * size);

    return array[randomValue];
  }
}

/**
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1));
console.log(randomizedSet.remove(2));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
console.log(randomizedSet.remove(1));
console.log(randomizedSet.insert(2));
console.log(randomizedSet.getRandom());
