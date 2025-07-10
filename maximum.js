// nums = [2, 1, 5, 1, 3, 2], k = 3

function maximum(arr, k) {
  // add the first window
  let sum = 0;
  let left = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = sum > max ? sum : max;
      sum -= arr[left];
      left++;
    }
  }

  return max;
}

console.log(maximum([2, 6, 8, 3, 5, 11, 3], 3));

