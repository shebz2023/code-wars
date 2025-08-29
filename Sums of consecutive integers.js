// The sum of x consecutive integers is y. What is the consecutive integer at position n? Given x, y, and n, solve for the integer. Assume the starting position is 0.

// For example, if the sum of 4 consecutive integers is 14, what is the consecutive integer at position 3?

// We find that the consecutive integers are [2, 3, 4, 5], so the integer at position 3 is 5.

// position(4, 14, 3) == 5
// Assume there will always be a sum of x consecutive integers that totals to y and n will never be indexed out of bounds.

// HOW TO SOLVE IT

// Step 1: Write out our sequence
// If we have x consecutive integers starting with a, the sequence is:

// text
// a, (a+1), (a+2), (a+3), ..., (a + x - 1)
// Step 2: Write the sum of this sequence
// The sum y is:

// text
// y = a + (a+1) + (a+2) + ... + (a + x - 1)
// Step 3: Rearrange the sum
// Let's group all the a terms together:

// text
// y = a + a + a + ... + a  (x times) + 1 + 2 + 3 + ... + (x-1)
// This gives us:

// text
// y = x*a + [1 + 2 + 3 + ... + (x-1)]
// Step 4: Recognize the pattern
// The part [1 + 2 + 3 + ... + (x-1)] is a famous pattern! It's the sum of the first (x-1) numbers.

// There's a formula for this: Sum of first n numbers = n(n+1)/2

// So for (x-1) numbers: Sum = (x-1)*x/2

// Step 5: Put it all together
// Now our equation becomes:

// text
// y = x*a + (x-1)*x/2
// Step 6: Solve for a (the first number)
// We want to find a, so let's rearrange:

// text
// x*a = y - (x-1)*x/2
// Divide both sides by x:

// text
// a = [y - (x-1)*x/2] / x
// Which is exactly: (y - x*(x-1)/2) / x

function position(x, y, z) {
  // y = x * firstTermn + ((x - 1) * x) / 2;
  const start = y / x - ((x - 1) * x) / (2 * x);
  console.log(start);
  const result = [];
  for (let i = start; i < x + start; i++) {
    result.push(i);
  }
  return result[z];
  // we can also use this,we return from the start to this number
  // return start + n
}

console.log(position(4, 14, 3));
