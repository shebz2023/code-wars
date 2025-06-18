function narcissistic(value) {
  const string = value.toString();
  const array = string.split("");
  const arrayOfNumbers = array.map(Number);
  let sum = 0;
  for (const j of arrayOfNumbers) {
    sum = j ** arrayOfNumbers.length + sum;
  }

  return sum == value;
}

console.log(narcissistic(153));

// Armstrong number

// the sum of digits is equal to the input number

// each digit is powered by the number of digits the input number has
