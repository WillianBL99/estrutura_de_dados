import Compare from './../compare.js';

export default class MergeSort {
  static mergeSort(array, compareFn = Compare.defaultCompare) {
    if (array.length > 1) {
      const { length } = array;
      const middle = Math.floor(length / 2);
      const left = this.mergeSort(array.slice(0, middle), compareFn);
      const right = this.mergeSort(array.slice(middle, length), compareFn);
      array = this.merge(left, right, compareFn);
    }

    return array;
  }

  static merge(left, right, compareFn = Compare.defaultCompare) {
    let i = 0;
    let j = 0;
    const result = [];

    while (i < left.length && j < right.length) {
      result.push(
        compareFn(left[i], right[j]) === Compare.LESS_THAN
          ? left[i++]
          : right[j++]
      );
    }

    return result.concat(i < left.length ? left.slice(i) : right.slice(j));
  }
}
