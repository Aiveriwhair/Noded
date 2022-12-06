import IArray from "../IArray";

class Lifo implements IArray {
  max_length = 128;
  top: number;
  elements: Array<Object>;

  constructor(max_length = 128) {
    this.top = 0;
    this.max_length = max_length;
    this.elements = new Array<Object>(max_length);
  }

  put(element: Object): Object | null {
    if (this.isFull()) return null;

    this.elements[this.top] = element;
    this.top++;
    return 1;
  }

  get(): Object | null {
    if (this.isEmpty()) return null;
    this.top--;
    return this.elements[this.top];
  }

  isEmpty(): boolean {
    return this.top == 0;
  }

  isFull(): boolean {
    return this.top == this.max_length;
  }
}

export default Lifo;
