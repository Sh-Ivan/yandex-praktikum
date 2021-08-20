function zip(...obj) {
	return obj.reverse().reduce((zipObject, val) => {
		return Object.assign(zipObject, val);
	}, {});
}

a = { a: 1, b: 2, d: 5 };
b = { a: 2, b: 3, c: 4 };
c = { a: 6, d: 7, e: 8 };
console.log(zip(a, b, c));

// беглое решение из банка, но проверку хорошо бы другую точно
const isObject = (checkValue) => {
	return String(checkValue) === '[object Object]';
};

const zip1 = (...args) => {
	return args.reduce((accumulator, object) => {
		if (isObject(object)) {
			for (const [key, value] of Object.entries(object)) {
				if (!accumulator.hasOwnProperty(key)) {
					accumulator[key] = value;
				}
			}
		}
		return accumulator;
	}, {});
};
