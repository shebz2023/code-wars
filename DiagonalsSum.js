function sum(matrix) {
  let sum = 0;
  let elements = matrix.join(",").split(",");
  let sizeOfMatrix = elements.length;
  const rightCounter = matrix.length + 1;
  const leftCounter = matrix.length - 1;
  for (let i = 0; i < sizeOfMatrix; i += rightCounter) {
    console.log("right:", elements[i]);
    sum += Number(elements[i]);
  }
  for (let i = leftCounter; i < sizeOfMatrix; i += leftCounter) {
    console.log("left:", elements[i]);
    sum += Number(elements[i]);
  }
  return sum - elements[sizeOfMatrix - 1];
}
console.log(
  "2x2",
  sum([
    [1, 2],
    [4, 5],
  ])
);
console.log(
  "3x3",
  sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
console.log(
  "4x4",
  sum([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
