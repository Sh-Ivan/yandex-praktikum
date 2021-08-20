const assert = require('chai').assert;
import cloneDeep from './cloneDeep';

describe('cloneDeep', () => {
  it('clone element don\'t equal original element', () => {
    const objects = [{ 'a': 1 }, { 'b': 2 }];
    const deep = cloneDeep(objects);
    if (Array.isArray(deep)) {
      assert.isFalse(deep[0] === objects[0])
    }
  })
})