// Write a function capitalizeOdd that takes a string and returns a new string where the letters at odd indexes are capitalized.

// capitalizeOdd("Javascript") // JAvAsCrIpT
// capitalizeOdd("The quick BROWN fox") //THe qUiCk BROWN fOx

function capitalizeOdd(s) {
  const arr = [...s];
  let capitalizedArr = [];
  let element;
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    if (i % 2 != 0) {
      element = arr[i].toUpperCase();
    }
    capitalizedArr.push(element);
  }
  return capitalizedArr.join('');
}

console.log(capitalizeOdd("The quick BROWN fox"));
