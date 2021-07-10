function range(start = 0, end, step = 1) {
	if (arguments.length === 0) {
		return [];
	}

	let first = start;
	let last = end;
	let _step = step;

	if (arguments.length === 1) {
		first = 0;
		last = arguments[0];
		_step = arguments[0] > 0 ? 1 : -1;
	}
	if (arguments.length === 2) {
		first = start;
		last = end;
		_step = first < last ? 1 : -1;
	}
	const lengthArray = Math.floor(Math.abs((last - first) / Math.abs(_step || 1)));
	let rangeArray = [...new Array(lengthArray)];
	rangeArray = rangeArray.map((element, index) => {
		return first + _step * index;
	});
	return rangeArray;
}

module.exports = range;
