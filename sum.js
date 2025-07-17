function findSum(n) {
  let sum = 0;
  let arr = n.toString().split("");
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  if (arr.length > 1) {
    return findSum(sum);
  }
  return n;
}

console.log(findSum(467));
