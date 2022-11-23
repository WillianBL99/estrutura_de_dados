import Compare from '../compare.js';

export default class InsertionSort {
  static insertionSort(array, compareFn = Compare.defaultCompare) {
    const { length } = array;
    let temp;

    for (let i = 1; i < length; i++) {
      let j = i;
      temp = array[i];

      while (
        j > 0 &&
        compareFn(array[j - 1], temp) === Compare.BIGGER_OR_EQUALS_THAN
      ) {
        array[j] = array[j - 1];
        j--;
      }

      array[j] = temp;
    }

    return array;
  }
}
