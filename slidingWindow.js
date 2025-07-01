// this is the logic used for consecutive terms
// find the length of the longest substring without repeating characters (a classic problem):

function substring(s) {
  let arr = [...s];
  let left = 0;
  let length = 0;
  for (let right = 0; right < s.length; right++) {
    
    left++;
  }
  return s.length;
}

console.log(substring("abcabcbb"));
