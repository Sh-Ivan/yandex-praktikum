function rangeRight(start, end, step) {
	return range(start, end, step, true);
}

function range(start = 0, end, step = 1, isRight = false) {
	if (start === undefined) {
		return [];
	}

	let first = start;
	let last = end;
	let _step = step;

	if (end === undefined) {
		first = 0;
		last = arguments[0];
		_step = arguments[0] > 0 ? 1 : -1;
	}
	if (step === undefined) {
		first = start;
		last = end;
		_step = first < last ? 1 : -1;
	}
	const lengthArray = Math.floor(Math.abs((last - first) / Math.abs(_step || 1)));
	let rangeArray = [...new Array(lengthArray)];
	rangeArray = rangeArray.map((element, index) => {
		if (isRight) {
			return first + _step * (lengthArray - index - 1);
		} else {
			return first + _step * index;
		}
	});
	return rangeArray;
}

module.exports = rangeRight;
