// TODO: Solve again
function minWindow(s: string, t: string): string {
  const map = new Map();
  let start = 0;
  let minStart = 0;
  let minLength = Number.MAX_SAFE_INTEGER;
  let counter = t.length;

  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) + 1);    
  }

  for (let end = 1; end <= s.length; end++) {
    const value = map.get(s[end - 1]);
    
    if(value !== undefined) {
      if(value > 0) {
        counter--;
      }

      map.set(s[end - 1], value - 1);

      while(counter === 0) {
        if(end - start < minLength) {
          minLength = end - start;
          minStart = start;
        }
        
        const innerValue = map.get(s[start]);
        
        if(innerValue !== undefined) {
          if(innerValue + 1 > 0) {
            counter++;
          }
          
          map.set(s[start], innerValue + 1);
        }
        
        start++;
      }
    }
  }

  return minLength === Number.MAX_SAFE_INTEGER ? "" : s.slice(minStart, minStart + minLength);
};

const value = "cabwefgewcwaefgcf";
const words = "cae";
const result = minWindow(value, words);
console.log(result);