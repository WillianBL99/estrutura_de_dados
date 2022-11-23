import Compare from '../compare.js';

export default class CountingSort {
  static countingSort(array, compareFn = Compare.defaultCompare) {
    if (array.length < 2) {
      return array;
    }

    const maxValue = this.findMaxValue(array);
    const counts = new Array(maxValue + 1);
    array.forEach((element) => {
      if (!counts[element]) {
        counts[element] = 0;
      }
      counts[element]++;
    });

    let sortedIndex = 0;
    counts.forEach((count, i) => {
      while (count > 0) {
        array[sortedIndex++] = i;
        count--;
      }
    });
    
    return array;
  }

  static findMaxValue(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > max) {
        max = array[i];
      }
    }
    return max;
  }

  static countingSortHash(array, compareFn = Compare.defaultCompare) {
    if (array.length < 2) {
      return array;
    }

    const count = {};

    array.forEach((element) => {
      if (!count[element]) {
        count[element] = 0;
      }
      count[element]++;
    });

    let sortedIndex = 0;
    Object.keys(count).forEach((key) => {
      while (count[key] > 0) {
        array[sortedIndex++] = parseInt(key);
        count[key]--;
      }
    });

    return array;
  }
}
