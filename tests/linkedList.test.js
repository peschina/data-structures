const { LinkedList } = require("../src/linkedList/linkedList");

describe("LinkedList", () => {
  it("should create an empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList).not.toBeNull();
    expect(linkedList.toString()).toBe("");
  });
  it("should add one node to head of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    expect(linkedList.contains(1)).toBe(true);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.toString()).toBe("1-(null)");
  });
  it("should add more nodes to to head of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    expect(linkedList.contains(1)).toBe(true);
    expect(linkedList.toString()).toBe("1-(null)");
    linkedList.addFirst(2);
    expect(linkedList.contains(2)).toBe(true);
    expect(linkedList.toString()).toBe("2-(1),1-(null)");
    linkedList.addFirst(3);
    expect(linkedList.contains(3)).toBe(true);
    expect(linkedList.toString()).toBe("3-(2),2-(1),1-(null)");
    expect(linkedList.indexOf(1)).toBe(2);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(3)).toBe(0);
  });
  it("should add one node to tail of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    expect(linkedList.contains(1)).toBe(true);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.toString()).toBe("1-(null)");
  });
  it("should add more nodes to tail of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    expect(linkedList.indexOf(1)).toBe(0);
    expect(linkedList.contains(1)).toBe(true);
    expect(linkedList.toString()).toBe("1-(null)");
    linkedList.addLast(2);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.contains(2)).toBe(true);
    expect(linkedList.toString()).toBe("1-(2),2-(null)");
    linkedList.addLast(3);
    expect(linkedList.indexOf(3)).toBe(2);
    expect(linkedList.contains(3)).toBe(true);
    expect(linkedList.toString()).toBe("1-(2),2-(3),3-(null)");
  });
  it("should return index by value", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    expect(linkedList.indexOf(1)).toBe(0);
    linkedList.addLast(2);
    expect(linkedList.indexOf(2)).toBe(1);
    linkedList.addLast(3);
    expect(linkedList.indexOf(3)).toBe(2);
    expect(linkedList.indexOf(4)).toBe(-1);
  });
  it("should check if value is contained", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    expect(linkedList.contains(1)).toBe(true);
    linkedList.addLast(2);
    expect(linkedList.contains(2)).toBe(true);
    linkedList.addLast(3);
    expect(linkedList.contains(3)).toBe(true);
    expect(linkedList.contains(4)).toBe(false);
  });
  it("should remove one node from head of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    linkedList.deleteFirst();
    expect(linkedList.toString()).toBe("");
    expect(linkedList.contains(1)).toBe(false);
  });
  it("should remove more nodes from head of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.deleteFirst();
    expect(linkedList.toString()).toBe("2-(3),3-(null)");
    expect(linkedList.contains(1)).toBe(false);
    linkedList.deleteFirst();
    expect(linkedList.toString()).toBe("3-(null)");
    expect(linkedList.contains(2)).toBe(false);
    linkedList.deleteFirst();
    expect(linkedList.toString()).toBe("");
    expect(linkedList.contains(3)).toBe(false);
  });
  it("should throw error if trying to delete node from head and linked list is empty", () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.deleteFirst()).toThrow(Error);
  });
  it("should remove one node from tail of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(1);
    linkedList.deleteLast();
    expect(linkedList.toString()).toBe("");
    expect(linkedList.contains(1)).toBe(false);
  });
  it("should remove more nodes from tail of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addFirst(2);
    linkedList.addFirst(1);
    linkedList.addLast(3);
    linkedList.deleteLast();
    expect(linkedList.toString()).toBe("1-(2),2-(null)");
    expect(linkedList.contains(3)).toBe(false);
    linkedList.deleteLast();
    expect(linkedList.contains(2)).toBe(false);
    expect(linkedList.toString()).toBe("1-(null)");
    linkedList.deleteLast();
    expect(linkedList.toString()).toBe("");
    expect(linkedList.contains(1)).toBe(false);
  });
  it("should throw error if trying to delete node from tail and linked list is empty", () => {
    const linkedList = new LinkedList();
    expect(() => linkedList.deleteLast()).toThrow(Error);
  });
  it("should reverse linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.reverse();
    expect(linkedList.toString()).toBe("4-(3),3-(2),2-(1),1-(null)");
    expect(linkedList.indexOf(1)).toBe(3);
    expect(linkedList.indexOf(2)).toBe(2);
    expect(linkedList.indexOf(3)).toBe(1);
    expect(linkedList.indexOf(4)).toBe(0);
  });
  it("should return kth node from end of linked list", () => {
    const linkedList = new LinkedList();
    linkedList.addLast(1);
    linkedList.addLast(2);
    linkedList.addLast(3);
    linkedList.addLast(4);
    linkedList.addLast(5);
    linkedList.addLast(6);
    linkedList.addLast(7);
    expect(linkedList.findKthFromEnd(3).value).toBe(4);
    expect(linkedList.findKthFromEnd(4).value).toBe(3);
    expect(linkedList.findKthFromEnd(8)).toBe(null);
  });
});
