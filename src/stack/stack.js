class Stack {
  constructor(size) {
    this.size = size;
    this.items = new Array(this.size);
    this.count = 0;
  }

  push(item) {
    if (this.count == this.size) throw Error("stack is full");
    this.items[this.count] = item;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) throw Error("stack is empty");
    this.count--;
    const popped = this.items[this.count];
    this.items[this.count] = undefined;
    return popped;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count == 0;
  }

  printLength() {
    return this.count;
  }

  toString() {
    return this.items.join(",");
  }
}

exports.Stack = Stack;
