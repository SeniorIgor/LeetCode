export function findRepeatedDnaSequences(s: string): string[] {
  const seen = new Set<string>();
  const repeated = new Set<string>();

  for (let i = 0; i <= s.length - 10; i++) {
    const sequence = s.slice(i, i + 10);

    if (seen.has(sequence)) {
      repeated.add(sequence);
    }

    seen.add(sequence);
  }

  return Array.from(repeated);
};

// Test Case #1
// const value = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'; // ["AAAAACCCCC","CCCCCAAAAA"]
// const result = findRepeatedDnaSequences(value);
// Test Case #2
// const value = 'AAAAAAAAAAAAA'; // ["AAAAAAAAAA"]
// const result = findRepeatedDnaSequences(value);
// Test Case #3
const value = 'AAAAAAAAAAA'; // ["AAAAAAAAAA"]
const result = findRepeatedDnaSequences(value);
console.log(result);
