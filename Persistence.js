function persistence(...num) {
  const array = num
    .toString()
    .split("")
    .map((i) => +i);
  let product = 1;
  let iteration = 0;

  while (numLengthOfArray > 1) {
    console.log('it reached here')
    let numbers = iteration == 0 ? array : [...product];
    console.log(" under iteration",numbers);
    for (const i of numbers) {
      product = product * i;
    }
    let lengthOfArray = product.toString().split("").length;
    enumLengthOfArray = lengthOfArray.map(Number)
    iteration = iteration + 1;
    console.log('the iteration',iteration)
    return
  }
  console.log("the product  is at:", product);
  console.log("the iteration  is at:", iteration);
  console.log("the length of this array  is at:", lengthOfArray);
  return iteration;
}
console.log(persistence(39));
