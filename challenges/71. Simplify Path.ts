function simplifyPath(path: string): string {
  const result: Array<string> = [];
  
  for (const part of path.split('/')) {
    switch (part) {
      case '':
      case '.':
        break;
      case '..':
        result.pop();
        break;
      default:
        result.push(part);
        break;
    }
  }

  return '/' + result.join('/');
};

const value = "/a/../../b/../c//.//";
const result = simplifyPath(value);
console.log(result);