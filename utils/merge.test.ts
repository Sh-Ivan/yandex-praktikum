const assert = require('chai').assert;
import {merge} from './merge';

describe('merge', () => {
  it('b contains a: 2 and c: 1', () => {
    const result = merge({a: {b: {a: 2}}, d: 5}, {a: {b: {c: 1}}});
    const expected = {
      a: {
        b: {
          a: 2,
          c: 1,
        }
      },
      d: 5,
    }
    assert.deepEqual(result, expected)
  })
})