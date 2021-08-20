function canGetCount(num) {
	let counter = num;
	return function () {
		const result = num > 0 ? 'yes' : 'no';
		num--;
		return result;
	};
}

const getOne = canGetCount(1.5);

console.log(getOne()); // yes
console.log(getOne()); // yes
console.log(getOne()); // no
