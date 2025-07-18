function sort(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // we substract one for five terms then it will reach three and stops because j+1 would be invalid if we reached j4 and we substract i because as we sort the first indexes are already sorted so we don't need to go back there that makes us substract i
      if (arr[j] > arr[j + 1]) {
        temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sort([1, 4, 3, 2]));
