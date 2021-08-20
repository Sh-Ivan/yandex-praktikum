const assert = require('chai').assert;
import trim from './trim-util';

describe('trim', function() {
  it('remove spaces', function() {
    assert.equal(trim('  abc  '), 'abc');
  });
  it('remove dash and underscore', function() {
    assert.equal(trim('-_-abc-_-', '_-'), 'abc');
  });
  it('remove \xA0', function() {
    assert.equal(trim('\xA0foo'), 'foo');
  });
  it('stay space', function() {
    assert.equal(trim('\xA0foo', ' '), '\xA0foo');
  });
  it('remove dash and underscore', function() {
    assert.deepEqual(['  foo  ', '  bar  '].map(value => trim(value)), ['foo', 'bar']);
  });
})