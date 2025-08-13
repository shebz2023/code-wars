// Task
// Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

function leastLarger(a, el) {
  el = a[el]
  const elements = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > el) {
      elements[i] = a[i];
    }
  }
  if (elements.length < 1) {
    return -1;
  } else {
    const result = Object.entries(elements);
    result.sort((a, b) => a[1] - b[1]);
    return Number(result[0][0]);
  }
}

console.log(leastLarger([4, 1, 3, 5, 6], 4));
console.log(leastLarger([1, 3, 5, 2, 4], 0));
console.log(leastLarger([1, 3, 5, 2, 4], 0));
