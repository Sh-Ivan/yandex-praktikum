function bubbleSort(arr) {
	let swapped = true;
	while (swapped) {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapped = true;
			}
		}
	}

	return arr;
}

function swap(arr, i, j) {
	const tmp = arr[i];

	arr[i] = arr[j];
	arr[j] = tmp;
}

const arr = [2, 5, 1, 0, 7, 9, 3, 1, 5, 6, 4];
console.log(bubbleSort(arr));
