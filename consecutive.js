// Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.

// Consider an Example :
// 10 could be expressed as the sum of 1 + 2 + 3 + 4 .
// Task
// Given Positive integer, N , return true if it could be expressed as a sum of two or more consecutive positive numbers , otherwise return false .

// Notes
// Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
// Input >> Output Examples:

// * consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 

// * consecutiveDucks(64)  ==>  return (false)

// * consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 )  . 


function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false; 
    n = n / 2; 
  }
  return true;
}

console.log(isPowerOfTwo(57))


// a number which is a power of two is cooked