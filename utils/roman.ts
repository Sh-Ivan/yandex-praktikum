/**
 * @description error codes
 * @type {string}
 */

 const TYPE_ERROR = 'Unsupported input value type';
 const RANGE_ERROR = 'Input value must be [1; 3999]';
 const UNKNOWN_SYMBOLS = 'Unknown input symbols';

 const romanMap: {[key: string]: number} = {
   M: 1000,
   CM: 900,
   D: 500,
   C: 100,
   XC: 90,
   L: 50,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1
 }
 
 /**
  * @description validate input values and determinate needed convert solution
  * @param {string|number} number
  * @returns {string|number}
  */
 const roman = (number: number | string | unknown): number | string => {
   if (typeof number !== 'number' && typeof number !== 'string') {
    throw new Error(TYPE_ERROR);
   }

   let result: number | string; 
   if (number.toString().search(/^[0-9]+$/) !== -1) {
    let value = +number;
    result = '';
    if (value < 1 || value > 3999) {
      throw new Error(RANGE_ERROR);
    }

    const romanSymbols = Object.entries(romanMap);
    let keyNumber = 0;
    let intPart: number;
    let multiplier : number;
    while (value >= 0 && keyNumber < romanSymbols.length) {
      multiplier = romanSymbols[keyNumber][1]
      intPart = Math.floor(value / multiplier);
      if (intPart > 0)
      {
        for (let i = 0; i < intPart; i++) {
          result += romanSymbols[keyNumber][0];
        }
        value -= intPart * multiplier;
      }

      keyNumber++;
    }


   } else if (typeof number === 'string' && number.search(/^[a-zA-z]+$/) !== -1) {
     result = 0;
     for (let i = 0; i < number.length; i++) {
       let next: string = `${number[i]}${number[i+1]}`;
       if (next in romanMap) {
         result += romanMap[next]
         i++;
       } else {
         result += romanMap[number[i]];
       }
     }
   } else {
     throw new Error(UNKNOWN_SYMBOLS);
   }

   return result;
 };
 
 export default roman
 
 console.log(roman(1904)) // MCMIV
 console.log(roman('MCMXC')) // 1990
 console.log(roman('2017')) // MMXVII
 console.log(isNaN(roman('xxxxx') as number)) // true
 console.log(isNaN(roman('iiii')as number)) // true
 
 try {
   roman('19a04')
 } catch (err) {
   console.log (err) // Error { "Unknown input symbols" }
 }
 
 try {
   roman(true)
 } catch (err) {
   console.log (err) // Error { "Unsupported input value type" }
 }
 
 try {
   roman(0)
 } catch (err) {
   console.log (err) // Error { "Input value must be [1; 3999]" }
 }
 