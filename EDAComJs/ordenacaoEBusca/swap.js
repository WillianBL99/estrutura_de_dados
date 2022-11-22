export default class Swap {
  // modo ES2015
  static swap(array, i, j) {
    [array[i], array[j]] = [array[j], array[i]];
  }

  /*
  // modo clássico
  static swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  */
}
