function isPalindrome(s: string): boolean {
  const regexp = /[^a-zA-Z0-9]/g;
  
  const palindrome = s.replace(regexp, '').toLocaleLowerCase();

  let start = 0;
  let end = palindrome.length - 1;

  while (start < end) {
    if(palindrome[start++] !== palindrome[end--]) {
      return false;
    }
  }

  return true;
};

const value = " ";
const result = isPalindrome(value);
console.log(result);
