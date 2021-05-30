class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  addFirst(value) {
    this.first = new Node(value, this.first);
    if (!this.last) this.last = this.first;
  }

  addLast(value) {
    const node = new Node(value, null);
    if (!this.first) this.first = this.last = node;
    else {
      this.last.next = node;
      this.last = node;
    }
  }

  deleteFirst() {
    if (!this.first) throw Error("linked list is already empty");
    if (this.first == this.last) this.first = this.last = null;
    else this.first = this.first.next;
  }

  deleteLast() {
    if (!this.first) throw Error("linked list is already empty");
    if (this.first == this.last) {
      this.first = this.last = null;
      return;
    }
    let current = this.first;
    while (current) {
      if (current.next == this.last) {
        current.next = null;
        this.last = current;
        break;
      }
      current = current.next;
    }
  }

  contains(value) {
    let current = this.first;
    while (current) {
      if (current.value == value) return true;
      current = current.next;
    }
    return false;
  }

  indexOf(value) {
    let current = this.first;
    let index = -1;
    while (current) {
      index++;
      if (current.value == value) return index;
      current = current.next;
    }
    return -1;
  }

  toString() {
    const arr = [];
    let current = this.first;
    while (current) {
      arr.push(`${current.value}-(${current.next?.value || null})`);
      current = current.next;
    }
    return arr.join(",");
  }

  reverse() {
    let current = this.first;
    let previous = null;
    while (current) {
      const next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    const lastCopy = new Node(this.last.value, this.last.next);
    this.last = this.first;
    this.first = lastCopy;
  }
}

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

exports.LinkedList = LinkedList;
