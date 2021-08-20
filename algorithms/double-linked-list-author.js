class DoublyLinkedList {
	constructor() {
		this.size = 0;
		this.head = null;
		this.tail = null;
	}

	add(value, index) {
		const node = createNode(value);

		if (index === undefined) {
			if (this.tail) {
				node.prev = this.tail;
				this.tail.next = node;
				this.tail = node;
			} else {
				this.head = node;
				this.tail = node;
			}
		} else {
			const nodeAtIndex = this.searchByIndex(index);

			node.next = nodeAtIndex;
			node.prev = nodeAtIndex.prev;

			if (nodeAtIndex.prev) {
				nodeAtIndex.prev.next = node;
			}

			nodeAtIndex.prev = node;

			if (nodeAtIndex === this.head) {
				this.head = node;
			}
		}

		this.size++;
	}

	removeByValue(value) {
		const node = this.searchByValue(value);

		if (!node) {
			return;
		}

		this._removeNode(node);
	}

	removeByIndex(index) {
		this._removeNode(this.searchByIndex(index));
	}

	searchByIndex(index) {
		this._checkIndex(index);

		let node = this.head;

		for (let i = 0; i < index; i++) {
			node = node.next;
		}

		return node;
	}

	searchByValue(value, startIndex = 0) {
		let node = startIndex ? this.searchByIndex(startIndex) : this.head;

		while (node && node.value !== value) {
			node = node.next;
		}

		return node;
	}

	_checkIndex(index) {
		if (index >= this.size) {
			throw new Error('Индекс за пределами списка');
		}
	}

	_removeNode(node) {
		const prevNode = node.prev;
		const nextNode = node.next;

		if (prevNode) {
			prevNode.next = nextNode;
		}

		if (nextNode) {
			nextNode.prev = prevNode;
		}

		node.prev = null;
		node.next = null;

		if (node === this.head) {
			this.head = nextNode;
		}

		if (node === this.tail) {
			this.tail = prevNode;
		}

		this.size--;
	}
}

function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}
