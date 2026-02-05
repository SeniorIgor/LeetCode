interface CacheData {
  value: number;
  expiration: number;
}

class TimeLimitedCache {
  private map = new Map<number, CacheData>();

  set(key: number, value: number, duration: number): boolean {
    const now = Date.now();
    const prev = this.map.get(key);

    this.map.set(key, { value, expiration: now + duration });

    return prev !== undefined && prev.expiration > now;
  }

  get(key: number): number {
    const now = Date.now();
    const entry = this.map.get(key);

    if (entry === undefined) {
      return -1;
    }

    if (entry.expiration <= now) {
      this.map.delete(key);
      return -1;
    }

    return entry.value;
  }

  count(): number {
    const now = Date.now();
    let active = 0;

    for (const [key, { expiration }] of this.map) {
      if (expiration > now) {
        active++
      } else {
        this.map.delete(key);
      }
    }

    return active;
  }
}

// Test Case #1
// const timeLimitedCache = new TimeLimitedCache()
// console.log(timeLimitedCache.set(1, 42, 100)); // false
// setTimeout(() => console.log(timeLimitedCache.get(1)), 50); // 42
// setTimeout(() => console.log(timeLimitedCache.count()), 50); // 1
// setTimeout(() => console.log(timeLimitedCache.get(1)), 150); // -1
// Test Case #2
const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 50)); // false
setTimeout(() => console.log(timeLimitedCache.set(1, 50, 100)), 40); // true
setTimeout(() => console.log(timeLimitedCache.get(1)), 50); // 50
setTimeout(() => console.log(timeLimitedCache.get(1)), 120); // 50
setTimeout(() => console.log(timeLimitedCache.get(1)), 200); // -1
setTimeout(() => console.log(timeLimitedCache.count()), 250); // 0
