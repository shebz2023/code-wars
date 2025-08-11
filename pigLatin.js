function pigIt(str) {
  let words = str.split(" ");
  const specialCharPattern = /[^a-zA-Z0-9]/;
  let modifiedWords = [];
  for (let word of words) {
    if (specialCharPattern.test(word)) {
      modifiedWords.push(word)
      continue;
    }
    word = word.split("");
    const firstChar = word.shift();
    word = word.concat(firstChar).concat("ay").join("");
    modifiedWords.push(word);
  }
  return modifiedWords.join(" ");
}