function suffixSums(a) {
  //coding and coding..
  let sum = 0;
  let b = [];
  while (a.length > 0) {
    for (let i = 0; i < a.length; i++) {
      sum = a[i] + sum;
    }
    b.push(sum);
    sum = sum - b[b.length - 1];
    a.shift();

  }
  return b;
}
console.log(suffixSums([1, 2, 3]));
console.log(suffixSums([1, 2, 3, -6]));
console.log(suffixSums([0, 0, 0]));
console.log(suffixSums([1, 123, 23]));
