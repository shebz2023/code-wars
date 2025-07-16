function subsets(arr) {
  let subArr = [];
  let outPut = [];

  function fnCreate(index) {
    console.log("Called with index:", index, "subArr:", subArr);

    if (index >= arr.length) {
      console.log("==> pushing subset:", subArr);
      outPut.push([...subArr]);
      return;
    }

    // include arr[index]
    subArr.push(arr[index]);
    fnCreate(index + 1);

    // exclude arr[index]
    subArr.pop();
    fnCreate(index + 1);
  }

  fnCreate(0);
  return outPut;
}

console.log("RESULT:", subsets([1, 2]));
