class GEdge {
  public src: Node;
  public dest: Node;

  constructor(src: Node, dest: Node) {
    this.src = src;
    this.dest = dest;
  }
}

export default GEdge;
