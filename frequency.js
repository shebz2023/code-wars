// frequencies using maps

function frequencies(s) {
  const map = new Map();
  for (const letter of s) {
    map.set(letter, map.get(letter) + 1 || 1);
  }
  return map;
}

console.log(frequencies("hello abana"));
