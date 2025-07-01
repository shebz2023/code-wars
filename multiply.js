function multiply(a, b) {
  if (b == null && typeof a != "object") {
    return a * 2;
  } else if (b == null && typeof a == "object") {
    return a.map((i) => i * 2);
  } else if (b != null && typeof a == "object") {
    return a.map((i) => i * 2);
  }
  return a * b;
}

console.log(multiply(10));

