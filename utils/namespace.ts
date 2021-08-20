const namespace = (str: string): object => 
  str.split('.').reduceRight((obj: object, value: string) => ({[value]: obj}), {});
console.log(namespace('a.b.c.d.e')) // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

export default namespace