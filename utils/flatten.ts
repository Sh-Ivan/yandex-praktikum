type NestedArray<T = unknown> = T | NestedArray<T>[] 

function flatten<T>(arr: NestedArray<T>[]): T[] {
	const flattenArr: T[] = [];
	arr.forEach((el) => {
		if (Array.isArray(el)) {
				flattenArr.push(...flatten(el));
		}
		else {
			flattenArr.push(el);
		}
	})
	return flattenArr;
}

const testArray = ['a', ['b', [1, 'd'], 'e', ['f', ['g', 'h']]]];
console.log(flatten(testArray));
