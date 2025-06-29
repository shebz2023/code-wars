function isPrime(s) {
  //TODO
  let divisors = [];
  if (s == 1 || s < 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(s); i++) {
    if (s % i == 0) {
      divisors.push(i);
    }
  }
  if (divisors.length >= 1) {
    return false;
  }
  return true;
}

// 2 is prime and negative numbers are not prime including zero and one, prime numbers have only 2 divisors which are (1 and itself)
