class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    this.words.push(word);
  }

  search(word) {
    if (!word.includes(".")) {
      return this.words.includes(word);
    }

    for (const w of this.words) {
      if (w.length !== word.length) continue;

      let match = true;

      for (let i = 0; i < word.length; i++) {
        if (word[i] !== "." && word[i] !== w[i]) {
          match = false;
          break;
        }
      }

      if (match) return true;
    }

    return false;
  }
}

const dictionary = new WordDictionary();
console.log(dictionary.addWord("hello"));
console.log(dictionary.addWord("bad"));
console.log(dictionary.addWord("dad"));
console.log(dictionary.addWord("mad"));
console.log(dictionary.search("pad"), ":this is the output");
console.log(dictionary.search("bad"), ":this is the output");
console.log(dictionary.search(".ad"), ":this is the output");
console.log(dictionary.search("b.."), ":this is the output");
