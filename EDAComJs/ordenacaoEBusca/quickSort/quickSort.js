import Compare from '../compare.js';
import Swap from '../swap.js';

export default class QuickSort {
  static quickSort(array, compareFn = Compare.defaultCompare) {
    return this.quick(array, 0, array.length - 1, compareFn);
  }

  static quick(array, left, right, compareFn) {
    let index;
    if (array.length > 1) {
      index = this.partition(array, left, right, compareFn);

      if (left < index - 1) {
        this.quick(array, left, index - 1, compareFn);
      }

      if (index < right) {
        this.quick(array, index, right, compareFn);
      }
    }
    return array;
  }

  static partition(array, left, right, compareFn) {
    const pivot = array[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
      while (compareFn(array[i], pivot) === Compare.LESS_THAN) {
        i++;
      }
      while (compareFn(pivot, array[j]) !== Compare.BIGGER_OR_EQUALS_THAN) {
        j--;
      }
      if (i <= j) {
        Swap.swap(array, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
}
