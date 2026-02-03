type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const n = functions.length;
    const result = new Array<T>(n);
    let completed = 0;

    for (let i = 0; i < n; i++) {
      const fn = functions[i];

      fn()
        .then((value) => {
          completed++;
          result[i] = value;

          if (completed === n) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        })
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Test Case #1
// const input = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ];
// Test Case #2
// const input = [
//   () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//   () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ];
// Test Case #3
const input = [
  () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
  () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
  () => new Promise(resolve => setTimeout(() => resolve(16), 100))
];
promiseAll(input).then(console.log).catch(console.log);
// Test Case #1