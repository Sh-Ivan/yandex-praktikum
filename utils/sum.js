const sum = (a, b) => {
  if (b !== undefined) {
    return a + b;
  }
  function internalSum(b) {
    return a +b;
  }
  internalSum.toString = () => a;
  return internalSum;;
}

console.log(sum(2, 3))
console.log(sum(2))