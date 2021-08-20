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

	get(index) {
		this._checkIndex(index);
		return this.memory[index];
	}

	set(index, value) {
		this._checkIndex(index);
		this.memory[index] = value;
	}

	add(value, index) {
		if (index === undefined) {
			this.memory[this.length] = value;
		} else {
			this._checkIndex(index);

			for (let i = this.length; i > index; i--) {
				this.memory[i] = this.memory[i - 1];
			}

			this.memory[index] = value;
		}

		this.length++;

		if (this.length === this.size) {
			this._resize();
		}

		return this.length;
	}

	delete(index) {
		this._checkIndex(index);

		for (let i = index + 1; i < this.length; i++) {
			this.memory[i - 1] = this.memory[i];
		}

		this.length--;
		this.memory[this.length] = undefined;

		return this.length;
	}

	_resize() {
		const newSize = this.size * 2;
		const newMemory = allocate(newSize);

		for (let i = 0; i < this.size; i++) {
			newMemory[i] = this.memory[i];
		}

		this.size = newSize;
		this.memory = newMemory;
	}

	_checkIndex(index) {
		if (index < 0 || index >= this.length) {
			throw new Error('Индекс за пределами массива');
		}
	}
}

function allocate(size) {
	const memory = {};

	for (let i = 0; i < size; i++) {
		memory[i] = undefined;
	}

	return memory;
}
