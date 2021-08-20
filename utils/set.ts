import {merge, Indexed} from './merge';

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object
  }
  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  const pathArr = path.split('.').reverse();
  let newObj = {[pathArr[0]]: value};
  for (let el of pathArr.slice(1,)) {
    let val = {...newObj};
    newObj = {[el]: val}
  }

  const merged = merge(object as Indexed, newObj as Indexed);
	return merged;
}

export default set

function set2(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
      return object;
  }

  if (typeof path !== 'string') {
      throw new Error('path must be string');
  }

  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({
      [key]: acc,
  }), value as any);
  return merge(object as Indexed, result);
}

set2(3, 'foo.bar', 'baz');

/**
  * set({ foo: 5 }, 'bar.baz', 10); // { foo: 5, bar: { baz: 10 } }
  * set(3, 'foo.bar', 'baz'); // 3
*/