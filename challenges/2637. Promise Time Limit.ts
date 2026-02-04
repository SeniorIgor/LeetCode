type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args: any[]) {
    let timer: ReturnType<typeof setTimeout>;

    return new Promise((resolve, reject) => {
      timer = setTimeout(() => reject('Time Limit Exceeded'), t);

      fn(...args)
        .then(resolve, reject)
        .finally(() => clearTimeout(timer));
    })
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

// Test Case #1
// const fn = async (n: number) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// const t = 50;
// const input = [5];
// Test Case #2
// const fn = async (n: number) => {
//   await new Promise(res => setTimeout(res, 100));
//   return n * n;
// }
// const t = 150;
// const input = [5, 10];
// timeLimit(fn, t)(...input).then(console.log).catch(console.log);
// Test Case #3
const fn = async () => {
  throw "Error";
}
const t = 1000;
const input = [];
timeLimit(fn, t)(...input).then(console.log).catch(console.log);

// Another Solution
// type Fn = (...params: any[]) => Promise<any>;

// export function timeLimit(fn: Fn, t: number): Fn {
//   return async function (...args: any[]) {
//     let timer: ReturnType<typeof setTimeout>;

//     const timeoutPromise = new Promise<never>((_, reject) => {
//       timer = setTimeout(() => reject('Time Limit Exceeded'), t);
//     })

//     try {
//       return await Promise.race([fn(...args), timeoutPromise]);
//     } finally {
//       clearTimeout(timer!);
//     }
//   }
// };