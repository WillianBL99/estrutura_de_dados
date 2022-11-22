import Swap from './../swap.js';
import Compare from './../compare.js';
const swap = Swap.swap;

export default class BubbleSort {
  static bubbleSort(array, compareFn = Compare.defaultCompare) {
    const { length } = array;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        const compare = compareFn(array[j], array[j + 1], compareFn);
        if (compare === Compare.BIGGER_THAN) {
          swap(array, j, j + 1);
        }
      }
    }

    return array;
  }

  // evita comparações desnecessárias
  static bestBubbleSort(array, compareFn = Compare.defaultCompare) {
    const { length } = array;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        const compare = compareFn(array[j], array[j + 1], compareFn);
        if (compare === Compare.BIGGER_THAN) {
          swap(array, j, j + 1);
        }
      }
    }
  }
}
