import GArray from "../IArray";

class Fifo implements IArray {
  head: number;
  tail: number;
  length: number;
  elements: Array<Object>;
  max_length: number;

  constructor(max_length = 128) {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
    this.max_length = max_length;
    this.elements = new Array<Object>(max_length);
  }

  public put(element: Object): Object | null {
    if (this.isFull()) return null;

    this.length++;
    this.tail = (this.tail + 1) % this.max_length;
    if (this.tail == 0) this.elements[this.max_length - 1] = element;
    else this.elements[this.tail - 1] = element;
    return 1;
  }

  public get(): Object | null {
    if (this.isEmpty()) return null;

    this.length--;
    this.head = (this.head + 1) % this.max_length;
    if (this.head == 0) return this.elements[this.max_length - 1];
    return this.elements[this.head - 1];
  }

  public isEmpty(): boolean {
    return this.length == 0;
  }
  public isFull(): boolean {
    return this.length == this.max_length;
  }
}

export default Fifo;
