class LRUCache {
    capacity: number;
    cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number {
        const value = this.cache.get(key);
        
        if(value === undefined) {
            return -1;
        }
            
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key: number, value: number): void {
        if(this.cache.size >= this.capacity && !this.cache.has(key)) {
            this.cache.delete(this.cache.keys().next().value);
        }

        this.cache.delete(key);
        this.cache.set(key, value);
    }
}

const lRUCache = new LRUCache(2);
lRUCache.put(2, 2); // cache is {1=1}
lRUCache.put(3, 3); // cache is {1=1, 2=2}
console.log(lRUCache.get(3));    // return 1
console.log(lRUCache);
console.log(lRUCache.get(2));    // returns -1 (not found)
console.log(lRUCache);
lRUCache.put(4, 4); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(lRUCache.get(2));    // return -1 (not found)
console.log(lRUCache.get(3));    // return 3
console.log(lRUCache.get(4));    // return 4
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache);
// console.log('---------------');
// console.log('---------------');
// console.log('---------------');
// console.log('---------------');