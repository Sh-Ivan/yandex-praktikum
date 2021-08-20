const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
	let start = 0;
	let end = list.length;
	let middle = Math.floor((start + end) / 2);
	while (list[middle] !== element && start < middle) {
		if (element <= list[middle]) {
			end = middle;
			middle = Math.floor((start + end) / 2);
		} else {
			start = middle;
			middle = Math.floor((start + end) / 2);
		}
	}
	return list[middle] === element ? middle : -1;
}

for (let i = 0; i < 12; i++) {
	console.log(binarySearch(list, i));
}

function binarySearch2(list, element) {
	let first = 0;
	let last = list.length;
	let position = -1;
	while (first < last) {
		const mid = Math.floor((first + last) / 2);
		if (list[mid] === element) {
			position = mid;
		}
		if (list[mid] < element) first = mid + 1;
		else {
			last = mid;
		}
	}
	return position;
}
