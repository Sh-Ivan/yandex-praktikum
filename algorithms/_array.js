class MyArray {
	constructor(initialSize = 1) {
		if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
			throw new Error('Длина массива должна быть целым числом');
		}

		if (!(initialSize > 0)) {
			throw new Error('Размер массива должен быть больше нуля');
		}

		this.size = initialSize;
		this.memory = allocate(initialSize);
		this.length = 0;
	}

	// Возвращает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	get(index) {
		if (index >= this.size || index < 0) {
			throw new Error('Индекс за предалами массива');
		}
		return this.memory[index];
	}

	// Устанавливает значение по индексу.
	// Если индекс за пределами — кидает ошибку.
	set(index, value) {
		if (index >= this.size || index < 0) {
			throw new Error('Индекс за предалами массива');
		}
		this.memory[index] = value;
	}

	// Добавляет новый элемент в массив.
	// Если index не определён — добавляет в конец массива.
	// В противном случае — добавляет по индексу со сдвигом
	// всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Увеличивает выделенную память вдвое, если необходимо.
	// Возвращает новую длину массива.
	add(value, index) {
		if (typeof index !== 'undefined' && (index >= this.size || index < 0)) {
			throw new Error('Индекс за предалами массива');
		} else if (typeof index === 'undefined') {
			index = this.length;
		}
		this.length = Math.max(index + 1, this.length + 1);
		if (this.length > this.size) {
			this.size *= 2;
			const newMemory = allocate(this.size);
			for (let i = 0; i < this.length; i++) {
				newMemory[i] = this.memory[i];
			}
			this.memory = newMemory;
		}
		for (let i = this.length - 1; i > index; i--) {
			this.memory[i] = this.memory[i - 1];
		}
		this.memory[index] = value;
		return this.length;
	}

	// Удаляет элемент по индексу со сдвигом всех последующих элементов.
	// Если индекс за пределами - кидает ошибку.
	// Возвращает новую длину массива.
	delete(index) {
		if (index >= this.size || index < 0) {
			throw new Error('Индекс за предалами массива');
		}
		this.length--;
		for (let i = index; i < this.length; i++) {
			this.memory[i] = this.memory[i + 1];
		}
		this.memory[this.length] = undefined;
		return this.length;
	}
}

function allocate(size) {
	const memory = {};

	for (let i = 0; i < size; i++) {
		memory[i] = undefined;
	}

	return memory;
}

const arr = new MyArray(5);
console.log(arr);
arr.add('first');
console.log(arr);

arr.add('second', 3);
console.log(arr);
arr.delete(0);
console.log(arr);
arr.add('five', 4);
console.log(arr);
arr.add('six', 4);
console.log(arr);
arr.add('nine', 9);
console.log(arr);
arr.add('ten');
arr.set(0, 'first again');
console.log(arr);
console.log(arr.get('hd'));
