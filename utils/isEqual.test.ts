const assert = require('chai').assert;
import isEqual from './isEqual';

describe('isEqual', () => {
  it('{a: 1} equal {a: 1}', () => {
    assert.isTrue(isEqual({a: 1}, {a: 1}))
  })
})