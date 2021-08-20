function quickSort(arr, start = 0, end = arr.length - 1) {
	if (end > start) {
    const pivotIndex = partition(arr, start, end);
	quickSort(arr, start, pivotIndex -1);
	quickSort(arr, pivotIndex + 1, end);
    }
	return arr;
}

function partition(arr, start = 0, end = arr.length - 1) {
  const pivotValue = arr[end];

  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  swap(arr, pivotIndex, end);

  return pivotIndex;
}

function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

const arr = [2, 4, 6, 1, 8, 3, 5, 9, 0];

console.log(quickSort(arr));