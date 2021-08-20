class Queue {
  constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
  }
  
  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    const node = { value, next: null, prev: null };
    const prev = this.tail;
    if (prev !== null) {
      prev.next = node;
    } else {
      this.head = node;
    }
    node.prev = prev;
    this.tail = node;
    this.size++;
      
    return this.size;
  }
  
  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (this.head !== null) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;

    return value;
  }
  
  // Возвращает элемент в начале очереди.
  peek() {
    return this.head;
  }
  
  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0;
  }
}

