/**
 * @description error codes
 * @type {string}
 */
 const TYPE_ERROR = 'Unsupported input value type';
 const RANGE_ERROR = 'Input value must be [1; 3999]';
 const UNKNOWN_SYMBOLS = 'Unknown input symbols';
 
 const REG_DIGITS = /^-?\d+$/;
 const REG_ROMANS = /^[IVXLCDM]+$/i;
 const REG_AVAILABLE_ROMANS = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/i;
 const REG_COMBINATIONS_ROMANS = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g;
 
 const ROMANS_MAP: Record<string, number> = {
     M: 1000,
     CM: 900,
     D: 500,
     CD: 400,
     C: 100,
     XC: 90,
     L: 50,
     XL: 40,
     X: 10,
     IX: 9,
     V: 5,
     IV: 4,
     I: 1
 };
 
 /**
  * @description validate input values and determinate needed convert solution
  * @param {string|number} number
  * @returns {string|number}
  */
 const roman = (number: number | string): number | string => {
     switch (typeof number) {
         case "string":
             if (REG_DIGITS.test(number)) {
                 return romanize(+number);
             }
 
             if (REG_ROMANS.test(number)) {
                 return deromanize(number);
             }
 
             throw new Error(UNKNOWN_SYMBOLS);
 
         case "number":
             if (number < 1 || number > 3999) {
                 throw new Error(RANGE_ERROR);
             }
 
             if (REG_DIGITS.test(number.toString())) {
                 return romanize(number);
             }
 
             throw new Error(UNKNOWN_SYMBOLS);
 
         default:
             throw new Error(TYPE_ERROR);
     }
 };
 
 
 function romanize(num: number): string {
     let roman = "";
     for (let i in ROMANS_MAP) {
         if (!ROMANS_MAP.hasOwnProperty(i)) {
             continue;
         }
 
         while (num >= ROMANS_MAP[i]) {
             roman += i;
             num -= ROMANS_MAP[i];
         }
     }
     return roman;
 }
 
 function deromanize(roman: string): number {
     const upperRoman = roman.toUpperCase();
 
     if (+upperRoman < 1) {
         return 0;
     } else if (!REG_AVAILABLE_ROMANS.test(upperRoman)) {
         return NaN;
     }
 
     let num = 0;
     upperRoman.replace(REG_COMBINATIONS_ROMANS, i => {
         num += ROMANS_MAP[i];
         return '';
     });
     return num;
 }
 
 export default roman
 
 console.log(roman(1904)) // MCMIV
 console.log(roman('MCMXC')) // 1990
 console.log(roman('2017')) // MMXVII
 console.log(isNaN(roman('xxxxx'))) // true
 console.log(isNaN(roman('iiii'))) // true
 
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