export function isPalindrome(words) {
  let isPalindrome;
  let rightIndex;
  let wordLength = words.length;
  let mid = Math.floor(wordLength/2);

  if (wordLength === 1) {
    return true;
  }

  for (let leftIndex = 0; leftIndex < mid; leftIndex++) {
    rightIndex = wordLength - 1 - leftIndex;

    if (words[leftIndex] === words[rightIndex]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
}
