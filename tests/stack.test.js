const { Stack } = require("../src/stack/stack.js");

describe("Stack", () => {
  it("should create empty stack", () => {
    const stack = new Stack(5);
    expect(stack).not.toBeNull();
    expect(stack.toString()).toBe(',,,,');
  });
  it("should push item in stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    expect(stack.toString()).toBe('1,,,,');
  });
  it("should peek data in stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });
  it("should pop data in stack", () => {
    const stack = new Stack(5);
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });
  it("should throw error if trying to push item in a full stack", () => {
    const stack = new Stack(2);
    stack.push(1);
    stack.push(2);
    expect(() => stack.push(3)).toThrow(Error);
  });
  it("should throw error if trying to pop item in an empy stack", () => {
    const stack = new Stack(2);
    expect(() => stack.pop()).toThrow(Error);
  });
  it("should be possible to push and pop data", () => {
    const stack = new Stack(3);
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.toString()).toBe(',,');
  });
});
