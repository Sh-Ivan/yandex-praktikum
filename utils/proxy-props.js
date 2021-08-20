const props = {
	name: 'Abby',
	chat: 'the last of us. Part II',
	getChat() {
		this._privateMethod();
	},
	_privateMethod() {
		console.log(this._privateProp);
	},
	__privateMethodToo() {},
	_privateProp: 'Нельзя получить просто так',
};

const proxyProps = new Proxy(props, {
	get(target, prop) {
		if (prop.startsWith('_')) {
			throw new Error('Нет прав');
		}
		const value = target[prop];
		return typeof value === 'function' ? value.bind(target) : value;
	},
	set(target, prop, value) {
		if (prop.startsWith('_')) {
			throw new Error('Нет прав');
		}
		target[prop] = value;
		return true;
	},
	defineProperty(target, prop, desciptor) {
		if (prop.startsWith('_')) {
			throw new Error('Нет прав');
		}
		return Reflect.defineProperty(target, value, desciptor);
	},
	deleteProperty(target, prop) {
		if (prop.startsWith('_')) {
			throw new Error('Нет прав');
		}
		delete target[prop];
		return true;
	},
});

proxyProps.getChat();
delete proxyProps.chat;

proxyProps.newProp = 2;
console.log(proxyProps.newProp);

try {
	proxyProps._newPrivateProp = 'Super game';
} catch (error) {
	console.log(error);
}

try {
	delete proxyProps._privateProp;
} catch (error) {
	console.log(error); // Error: Нет прав
}
console.log(proxyProps);

/*
	* Вывод в консоль следующий:
Нельзя получить просто так
2
Error: Нет прав
Error: Нет прав
*/
