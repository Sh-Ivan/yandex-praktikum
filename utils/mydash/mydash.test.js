const assert = require('chai').assert;
const last = require('./last');
const first = require('./first');
const range = require('./range');
const rangeRight = require('./rangeRight');
const isEmpty = require('./isEmpty');

describe('last', function () {
	it('is equal 3', function () {
		assert.equal(last([1, 2, 3]), 3);
	});
	it('is undefined', function () {
		assert.equal(last([], undefined));
		assert.equal(last(), undefined);
	});
});

describe('first', function () {
	it('is equal 1', function () {
		assert.equal(first([1, 2, 3]), 1);
	});
	it('is undefined', function () {
		assert.equal(first([], undefined));
		assert.equal(first(), undefined);
	});
});

describe('range', function () {
	it('is equal', function () {
		assert.deepEqual(range(4), [0, 1, 2, 3]);
		assert.deepEqual(range(-4), [0, -1, -2, -3]);
		assert.deepEqual(range(1, 5), [1, 2, 3, 4]);
		assert.deepEqual(range(0, 20, 5), [0, 5, 10, 15]);
		assert.deepEqual(range(0, -4, -1), [0, -1, -2, -3]);
		assert.deepEqual(range(1, 4, 0), [1, 1, 1]);
		assert.deepEqual(range(0), []);
	});
});

describe('rangeRight', function () {
	it('is equal', function () {
		assert.deepEqual(rangeRight(4), [3, 2, 1, 0]);
		assert.deepEqual(rangeRight(-4), [-3, -2, -1, 0]);
		assert.deepEqual(rangeRight(1, 5), [4, 3, 2, 1]);
		assert.deepEqual(rangeRight(0, 20, 5), [15, 10, 5, 0]);
		assert.deepEqual(rangeRight(0, -4, -1), [-3, -2, -1, 0]);
		assert.deepEqual(rangeRight(1, 4, 0), [1, 1, 1]);
		assert.deepEqual(rangeRight(0), []);
	});
});

describe('isEmpty', function () {
	it('should be true', function () {
		assert.equal(isEmpty(null), true);
		assert.equal(isEmpty(true), true);
		assert.equal(isEmpty(1), true);
		assert.equal(isEmpty(123), true);
		assert.equal(isEmpty(''), true);
		assert.equal(isEmpty(0), true);
		assert.equal(isEmpty([]), true);
		assert.equal(isEmpty({}), true);
		assert.equal(isEmpty(new Map()), true);
		assert.equal(isEmpty(new Set()), true);
	});
	it('should be false', function () {
		assert.equal(isEmpty([1, 2, 3]), false);
		assert.equal(isEmpty({ a: 1 }), false);
		assert.equal(isEmpty('123'), false);
	});
	it('Set ([1,2]) should be false', function () {
		assert.equal(isEmpty(new Set([1, 2])), false);
	});
	it('Map ({1: 2}) should be false', function () {
		const map1 = new Map();
		map1.set(1, 2);
		assert.equal(isEmpty(map1), false);
	});
});
