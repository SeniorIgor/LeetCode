export function simplifyPath(path: string): string {
  const stack: string[] = [];

  for (let part of path.split('/')) {
    if (part === '..') {
      stack.pop();
    } else if (part !== '.' && part !== '') {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
};

// Test Case #1
const value = "/a/../../b/../c//.//";
const result = simplifyPath(value);
// Test Case #2 -> "/"
// const value = "/../";
// const result = simplifyPath(value);
console.log(result);