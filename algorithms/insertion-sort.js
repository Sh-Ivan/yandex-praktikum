function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		const insertionIndex = findInsertionIndex(arr, i);
		shiftElements(arr, insertionIndex, i);
	}

	return arr;
}

function findInsertionIndex(arr, i) {
	for (let j = i - 1; j >= 0; j--) {
		if (arr[j] < arr[i]) {
			return j + 1;
		}
	}

	return 0;
}

function shiftElements(arr, insertionIndex, i) {
	const value = arr[i];

	for (let j = i; j >= insertionIndex; j--) {
		arr[j] = arr[j - 1];
	}

	arr[insertionIndex] = value;
}

const arr = [2, 5, 1, 0, 7, 9, 3, 1, 5, 6, 4];
console.log(insertionSort(arr));
