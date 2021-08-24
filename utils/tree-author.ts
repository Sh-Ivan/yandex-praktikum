/** @description Drawing a beautiful fir-tree.Final picture dependent on number of tree levels
 * @param {number} lvl- quantity of tree levels.Also it can be a number in string representation.
 * @return {(string|null)} well drawn tree that consists of star symbols and pipe symbol as trunk
 */

 type Nullable<T> = T | null;

 const TYPE_ERROR = 'Something wrong with type of input param';
 
 const tree = (lvl: number | string): Nullable<string> => {
     if (typeof lvl !== 'number' && typeof lvl !== 'string') {
         throw new TypeError(TYPE_ERROR);
     }
 
     if (!(/\d+/.test(lvl.toString()))) {
         return null;
     }
 
     if (lvl < 3) {
         return null;
     }
 
     const numLevel = +lvl;
     const MAXLENGTH = 2 * (numLevel - 2) + 1;
     let star = 1;
 
     return new Array(numLevel).fill(' '.repeat(MAXLENGTH)).reduce(
         (resTree, item, index, array) => {
             if (index === (numLevel - 1)) {
                 item = item.slice(0, (MAXLENGTH - 1) / 2) + '|' + item.slice(0, (MAXLENGTH - 1) / 2);
             } else {
                 item = item.slice(0, (MAXLENGTH - star) / 2) + '*'.repeat(star) + item.slice(0, (MAXLENGTH - star) / 2);
             }
             star += 2;
             return resTree + item.toString() + '\n';
         }, '');
 };
 
 export default tree