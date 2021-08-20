const assert = require('chai').assert;
import set from './set';

describe('set', () => {
  it('should return object with new fields', () => {
    assert.deepEqual(set({ foo: 5 }, 'bar.baz', 10), { foo: 5, bar: { baz: 10 }})
  });
  it('should return initial object', () => {
    assert.equal(set(3, 'foo.bar', 'baz'), 3);
  })
})
