import Swap from './../swap.js';
import Compare from './../compare.js';

const swap = Swap.swap;

export default class SelectionSort {
  static selectionSort(array, compareFn = Compare.defaultCompare) {
    const { length } = array;
    let idxMinValue;

    for (let i = 0; i < length - 1; i++) {
      idxMinValue = i;

      for (let j = i; j < length; j++) {
        if (
          compareFn(array[idxMinValue], array[j]) ===
          Compare.BIGGER_OR_EQUALS_THAN
        ) {
          idxMinValue = j;
        }
      }

      if (idxMinValue !== i) {
        swap(array, i, idxMinValue);
      }
    }

    return array;
  }
}
