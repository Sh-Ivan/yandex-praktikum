function invert(obj) {
	const invertedObj = {};
	for (let [key, value] of Object.entries(obj)) {
		invertedObj[value] = key;
	}
	return invertedObj;
}

let obj = {
	a: 1,
	23: 'string',
	some: 'something else',
};
console.log(invert(obj));

/* Решение автора */
function invertAuthor(obj) {
	return Object.entries(obj).reduce((acc, [key, item]) => {
		acc[item] = key;
		return acc;
	}, {});
}
