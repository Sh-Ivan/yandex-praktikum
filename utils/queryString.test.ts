const assert = require('chai').assert;
import {queryStringify, StringIndexed} from './queryString';

describe('queryString', () => {
  it('very long query', () => {
    const obj: StringIndexed = {
      key: 1,
      key2: 'test',
      key3: false,
      key4: true,
      key5: [1, 2, 3],
      key6: {a: 1},
      key7: {b: {d: 2}},
  };
  const verLongString: string = 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'; 
  assert.equal(queryStringify(obj), verLongString);
  })
})