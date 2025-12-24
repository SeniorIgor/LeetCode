export function fullJustify(words: string[], maxWidth: number): string[] {
  const lines: Array<string> = [];
  let numberOfWords = 0;
  let numberOfLetters = 0;

  for(let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;

    if(maxWidth >= numberOfLetters + wordLength + numberOfWords) {
      numberOfWords++;
      numberOfLetters += wordLength;
    } else {
      lines.push(createLine(words, maxWidth, numberOfWords, numberOfLetters, i));
      
      numberOfLetters = wordLength;
      numberOfWords = 1;
    }
  }

  lines.push(createLine(words, maxWidth, numberOfWords, numberOfLetters, words.length));

  return lines;
};

function createLine(words: Array<string>, maxWidth: number, numberOfWords: number, 
    numberOfLetters: number, lastWordNumber: number): string {  
  let numberOfSpaces = 1                
  let additionalSpaces = 0;
  let line = "";
      
  if(lastWordNumber !== words.length) {
    const availableSpace = maxWidth - numberOfLetters;
    numberOfSpaces = Math.trunc(availableSpace / (numberOfWords - 1));     
    additionalSpaces = availableSpace % (numberOfWords - 1);
  }

  for (let i = lastWordNumber - numberOfWords; i < lastWordNumber; i++) {
    const word = words[i];

    if(!line.length) {
      line += word;
    } else {
      line += " ".repeat(numberOfSpaces) + (additionalSpaces > 0 ? ' ' : '') + word; 
      additionalSpaces--;
    }
  }

  if(line.length < maxWidth) {
    line += " ".repeat(maxWidth - line.length);
  }

  return line;
}

// Test Case #1
// const value = ["This", "is", "an", "example", "of", "text", "justification."];
// const maxWidth = 16;
// Test Case #2
// const value = ["What","must","be","acknowledgment","shall","be"];
// const maxWidth = 16;
// Test Case #3
const value = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
const maxWidth = 20;

const result = fullJustify(value, maxWidth);
console.log(result, result.map(item => item.length));

// ["This", "is", "an"]
// length = 8
// 16 - 8 = 8 -> how much spaces do we need
// 8 / 3 = 2.67 -> how much spaces will contain one space between words 
// 3 * 2 = 6 -> all equal spaces
// 8 - 6 = 2 -> separate equally between all spaces
