class GNode {
  public x: number;
  public y: number;
  public value: string | number;

  constructor(x: number, y: number, value: string | number) {
    this.x = x;
    this.y = y;
    this.value = value;
  }
}

export default GNode;
