type StepFn = (val: number) => number | StepFn;

let sum = 0;
function add(val?: number): number | StepFn | any {
  if (val === undefined) {
    return sum;
  }
  sum += val;
  return add;
}

console.log(add())
console.log(add(5)())
console.log(add(1)(2)())

export default add;