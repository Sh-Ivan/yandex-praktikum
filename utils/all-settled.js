const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

const promises = [
	delay(65).then(() => 10),
	delay(100).then(() => {
		throw 'my error';
	}),
];

async function allSettled(promises) {
	const results = [];
	let result;
	for (let i = 0; i < promises.length; i++) {
		try {
			result = await promises[i];
			results.push({ status: 'resolved', value: result });
		} catch (reason) {
			results.push({ status: 'rejected', reason });
		}
	}
	return Promise.resolve(results);
}

allSettled(promises);

// return Promise.resolve([{"status": "resolved", "value": 10}, {"status": "rejected", "reason": "my error"}]);

function allSettled1(promises) {
	const wrapper = (promise) =>
		promise.then((value) => ({ status: 'resolved', value })).catch((reason) => ({ status: 'rejected', reason }));

	return Promise.all(promises.map(wrapper));
}
