// Priority 1 - important to understand
// Array statistics
// You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

// The returned object should have the following properties:
// sum: The sum of all numbers in the array.
// average: The average of all numbers in the array (rounded to two decimal places).
// min: The minimum value in the array.
// max: The maximum value in the array.

// Example:
// arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }

function arrayStats(s) {
     
  return {
    sum: s.reduce((tot, acc) => tot + acc),
    average: s.reduce((tot, acc) => tot + acc) / s.length,
    min: Math.min(...s),
    max: Math.max(...s),
  };
}

console.log(arrayStats([1, 2, 3, 4, 5]));
