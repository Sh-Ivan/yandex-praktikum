class Stack {
  constructor() {
      this.size = 0;
      this.head = null;
      this.tail = null;
  }

  // Кладёт элемент на стек.
  // Возвращает новый размер стека.
  push(value) {
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
  
  // Убирает элемент со стека.
  // Если стек пустой, кидает ошибку.
  // Возвращает удалённый элемент.
  pop() {
    if (this.tail === null) {
      return null;
    }
    const value = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail !== null) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;

    return value;
  }
  
  // Возвращает верхний элемент стека без его удаления.
  peek() {
      return this.tail;
  }
  
  // Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
      return this.size === 0;
  }
}

const stack = new Stack();

console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.push(111));
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.push(2222));
console.log(stack);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.isEmpty());