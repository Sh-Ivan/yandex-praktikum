class DoublyLinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	// Добавляет элемент в список.
	// Если указан индекс - добавляет по индексу,
	// в противном случае добавляет в конец.
	// Если индекс за пределами — кидает ошибку.
	add(value, index) {
		const node = createNode(value);
		if (typeof index !== 'undefined' && index >= this.size) {
			throw 'Индекс за пределами списка';
		}
		if (typeof index === 'undefined') {
			index = this.size;
		}
		if (this.size === 0) {
			this.head = node;
			this.tail = node;
		} else {
			const currentNode = index === this.size ? this.tail : this.searchByIndex(index);
			if (index === this.size) {
				node.prev = currentNode;
				node.next = null;
				currentNode.next = node;
				this.tail = node;
			} else {
				node.prev = currentNode.prev;
				node.next = currentNode;
				if (currentNode.prev) {
					currentNode.prev.next = node;
				}
				currentNode.prev = node;
			}
			if (index === 0) {
				this.head = node;
			}
		}
		this.size++;
	}

	// Удаляет элемент из списка по значению.
	// Удаляет только первый найденный элемент.
	// Если элемент не найден, ничего делать не нужно.
	removeByValue(value) {
		let removingNode = this.searchByValue(value);
		if (removingNode) {
			this.removeNode(removingNode);
		}
	}

	// Удаляет элемент из списка по индексу.
	// Если индекс за пределами — кидает ошибку.
	removeByIndex(index) {
		if (index > this.size) {
			throw 'Индекс за пределами списка';
		}
		let removingNode = this.searchByIndex(index);
		this.removeNode(removingNode);
	}

	removeNode(removingNode) {
		if (removingNode.prev) {
			removingNode.prev.next = removingNode.next;
		} else {
			this.head = removingNode.next;
		}

		if (removingNode.next) {
			removingNode.next.prev = removingNode.prev;
		} else {
			this.tail = removingNode.prev;
		}
		removingNode = null;
		this.size--;
	}

	// Ищет элемент в списке по индексу.
	// Если индекс за пределами — кидает ошибку.
	searchByIndex(index) {
		if (index > this.size - 1) {
			throw 'Индекс за пределами списка';
		}
		if (index === 0) {
			return this.head;
		}
		let currentNode = this.head;
		for (let i = 1; i <= index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	// Ищет элемент в списке по значению.
	// Возвращает первый найденный элемент.
	// Опционально можно указать индекс начала поиска.
	// Если индекс за пределами — кидает ошибку.
	// Если элемент не найден, нужно вернуть null.
	searchByValue(value, startIndex = 0) {
		if (startIndex > this.size) {
			throw 'Индекс за пределами списка';
		}
		let index = startIndex;
		let targetNode = null;
		let currentNode = this.head;
		while (!targetNode && index < this.size) {
			if (currentNode.value === value) {
				targetNode = currentNode;
			}
			currentNode = currentNode.next;
			index++;
		}
		return targetNode;
	}
}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}

const list = new DoublyLinkedList();
list.add(5);
//console.log(list.head);
list.add(3);
//console.log(list.head);
list.add(-13);
list.add(99, 1);
list.add(0, 0);
//list.removeByValue(5);
console.log(list.head);
/*
{
    value: 5,
    prev: null,
    next: {
        value: 3,
        prev: {Ссылка на элемент со значением 5},
        next: {
            value: -13,
            prev: {Ссылка на элемент со значением 3},
            next: null
        }
    }
}
*/
