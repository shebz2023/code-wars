function mergeArrays(arr1, arr2) {
  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();
  const mergeArray = sortedArr1.concat(sortedArr2);
  return mergeArray;
  //   the sorting sorts numbers not in the way we want ,it converts them to strings and then sort lexicographically (alphabetically)
  // in order to properly sort numbers.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8]));
