// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

function spinWords(s) {
  var arrayOfWords = s.split(/\s+/);
  let spinnedWords = [];
  for (let i = 0; i < arrayOfWords.length; i++) {
    if (arrayOfWords[i].length > 4) {
      spinnedWords.push(arrayOfWords[i].split("").reverse().join(""));
    } else {
      spinnedWords.push(arrayOfWords[i]);
    }
  }
  return spinnedWords.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is rehtona test"));
console.log(spinWords("Welcome"));
