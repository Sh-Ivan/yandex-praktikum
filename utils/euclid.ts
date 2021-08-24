// euclid(6006, 3738735, 51051) --> 3003
// euclid(7) --> 7
// euclid(-421, 0.9923501, 3.1401525235324, -228.148832269) --> -1

/**
 * counts greatest common divisor for n numbers
 * by calling 'euclidForTwo' in cycle for all input params
 * @param {array} ...args contains numbers to check
 * @returns {number} solution or '-1' in case of invalid data
 */
 const euclid = (...args: number[]): number => {
   let nod = 1;
   if (args.length < 1) {
     nod = -1;
   };
     args.forEach(num => {
       if (!Number.isInteger(num)) {
         nod = -1;
       }
     })
     if (nod === -1) {
       return nod;
     }

     let findNOD = Math.min(...args);
     let max = findNOD / 2;
     for (let i = 1; i <= max / 2; i++) {
       findNOD = findNOD / i;
       if (args.every(num => Number.isInteger(num / findNOD))) {
        return findNOD;
       }
     }
     return nod;
}
export default euclid

console.log(euclid(6006, 3738735, 51051))
console.log(euclid(7))
console.log(euclid(-421, 0.9923501, 3.1401525235324, -228.148832269))