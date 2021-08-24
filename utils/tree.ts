/**
const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
assert.strictEqual(tree(5), expected);
assert.strictEqual(tree('5'), expected);
*/

type Nullable<T> = T | null;

const TYPE_ERROR = 'Something wrong with type of input param';

const tree = (lvl: number | string): Nullable<string> => {
    if (typeof lvl !== 'number' && typeof lvl !== 'string') {
      throw new Error(TYPE_ERROR);
    }
    let level = +lvl;
  if (level < 3 || isNaN(level)) {
    return null;
  }
  
  let space = ' '.repeat(level -2);
  let star = '*';
  let tree = '';
  let root = `${space}|${space}\n`;
  
  for (let i = 0; i < level - 1; i++) {
    tree += `${space}${star}${space}\n`;
    star += '**';
    space = space.slice(1);
  }
  tree += root;
  
  return tree;
};

export default tree


console.log(tree(6));