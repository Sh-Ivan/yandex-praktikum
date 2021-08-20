const METHODS = {
	GET: 'GET',
	PUT: 'PUT',
	POST: 'POST',
	DELETE: 'DELETE',
};

/**
 * Функцию реализовывать здесь необязательно, но может помочь не плодить логику у GET-метода
 * На входе: объект. Пример: {a: 1, b: 2, c: {d: 123}, k: [1, 2, 3]}
 * На выходе: строка. Пример: ?a=1&b=2&c=[object Object]&k=1,2,3
 */
function queryStringify(data) {
	if (!data) {
		throw new Error('Не переданы данные!');
	}
	let queryString = '?';
	Object.entries(data).forEach(([key, value]) => {
		queryString += `${key}=${value}&`;
	});
	return queryString.slice(0, -1);
}

class HTTPTransport {
	get = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.GET });
	};
	post = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.POST });
	};
	put = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.PUT });
	};
	delete = (url, options = {}) => {
		return this.request(url, { ...options, method: METHODS.DELETE });
	};

	// PUT, POST, DELETE

	// options:
	// headers — obj
	// data — obj
	request = (url, options) => {
		const { method, timeout = 5000, headers = { 'Content-Type': 'application/json' }, data } = options;
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.open(method, method === METHODS.GET && !!data ? `${url}${queryStringify(data)}` : url);
			xhr.timeout = timeout;
			Object.entries(headers).forEach(([key, value]) => {
				xhr.setRequestHeader(key, value);
			});

			xhr.onload = function () {
				resolve(xhr);
			};

			xhr.onabort = reject;
			xhr.onerror = reject;
			xhr.ontimeout = reject;

			if (method === METHODS.GET || !data) {
				xhr.send();
			} else {
				xhr.send(JSON.stringify(data));
			}
		});
	};
}

const fetchTransport = new HTTPTransport();
const result = fetchTransport.get('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
	console.log(result.response);
});

fetchTransport
	.post('https://jsonplaceholder.typicode.com/posts', {
		data: {
			title: 'foo',
			body: 'bar',
			userId: 1,
		},
	})
	.then((result) => {
		console.log(result.responseText);
	});

fetchTransport
	.put('https://jsonplaceholder.typicode.com/posts/1', {
		data: {
			id: 1,
			title: 'foo',
			body: 'bar',
			userId: 1,
		},
	})
	.then((result) => {
		console.log(result.responseText);
	});

fetchTransport.delete('https://jsonplaceholder.typicode.com/posts/1').then((result) => {
	console.log(result.responseText);
});
