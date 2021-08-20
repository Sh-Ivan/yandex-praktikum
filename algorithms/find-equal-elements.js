const a = [1, 2, 4, 7, 11, 19];
const b = [2, 7, 19, 28, 31];

function findEqualElements(arr1, arr2) {
	let start = 0;
	let restArray = [...arr2];
	return arr1.reduce((equal, next) => {
		restArray = restArray.slice(start);
		let index = restArray.findIndex((el) => el === next);
		if (index !== -1) {
			equal.push(next);
			start = index + 1;
		} else {
			start = 0;
		}
		return equal;
	}, []);
}

// Примеры

console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2])); // => [2, 2]

console.log(findEqualElements([2, 2, 2, 2], [1, 2, 2, 3])); // => [2, 2]
console.log(findEqualElements(a, b));

function findEqualElements2(arr1, arr2) {
	let i = 0;
	let j = 0;
	const result = [];

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] > arr2[j]) {
			j++;
		} else if (arr1[i] < arr2[j]) {
			i++;
		} else {
			result.push(arr1[i]);
			i++;
			j++;
		}
	}

	return result;
}
