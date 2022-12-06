interface IArray {
  put(element: Object): Object | null;

  get(): Object | null;

  isEmpty(): boolean;
  isFull(): boolean;
}

export default IArray;
