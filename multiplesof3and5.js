// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function multiples(s) {
  let multiples = [];

  if (s < 0) {
    return 0;
  }
  for (let i = 0; i < s; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      multiples.push(i);
    }
  }
  let [...setOfMultiples] = new Set(multiples)
  let sum = setOfMultiples.reduce((acc, val) => {
    return val + acc;
  }, 0);

  return sum;
}

console.log(multiples(20));
