export function isIsomorphic(s: string, t: string): boolean {
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sLetter = s[i];
    const tLetter = t[i];

    const tValue = sMap.get(sLetter);
    const sValue = tMap.get(tLetter);

    if (tValue === undefined && sValue === undefined) {
      sMap.set(sLetter, tLetter);
      tMap.set(tLetter, sLetter);
    } else if (sLetter !== sValue || tLetter !== tValue) {
      return false;
    }
  }

  return true;
};

const value = "paper";
const magazine = "title";
const result = isIsomorphic(value, magazine);
console.log(result);
