function fullJustify(words: string[], maxWidth: number): string[] {
  const result: Array<string> = [];
  let wordList: Array<string> = [];
  let sentenceLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    const spacesLength = wordList.length;
    const currentWord = words[i];

    if(sentenceLength + spacesLength + currentWord.length > maxWidth) {
      result.push(justify(wordList, spacesLength > 1 ? 'full' : 'left', sentenceLength, maxWidth));
      wordList = [currentWord];
      sentenceLength = 0;
    } else {
      wordList.push(currentWord);
    }

    sentenceLength += currentWord.length;
  }

  result.push(justify(wordList, 'left', sentenceLength, maxWidth));

  return result;
};

function justify(wordList: Array<string>, mode: 'left' | 'full', length: number, maxWidth: number): string {
  let result = '';
  const spacesBetweenWords = wordList.length - 1;
  const allSpaces = maxWidth - length;
  
  switch (mode) {
    case 'left': {
      result = wordList.join(' ') + " ".repeat(allSpaces - spacesBetweenWords);
      break;
    }
  
    case 'full':
      const averageSpace = Math.floor(allSpaces / spacesBetweenWords);
      const excessSpace = allSpaces - averageSpace * spacesBetweenWords;
      
      for (let i = 0; i < excessSpace; i++) {
        wordList[i] += ' '; 
      }

      const separator = ' '.repeat(averageSpace); 

      result = wordList.join(separator);

      break;
  }
  
  return result;
}

const value = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
const result = fullJustify(value, maxWidth);
console.log(result, result.map(item => item.length));

// ["This", "is", "an"]
// length = 8
// 16 - 8 = 8 -> how much spaces do we need
// 8 / 3 = 2.67 -> how much spaces will contain one space between words 
// 3 * 2 = 6 -> all equal spaces
// 8 - 6 = 2 -> separate equally between all spaces