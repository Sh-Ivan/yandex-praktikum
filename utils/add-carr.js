function add(val) {
  if (arguments.length === 0) {
    return 0
  }
  if (val === null ) {
    if (!arguments[2]) {
      return arguments[1];
    } else {
      return add.bind(this, null, arguments[1] + arguments[2])
    }
    
  }
  return add.bind(this, null, arguments[0])
}

console.log(add())
console.log(add(1)(2)(5)())
