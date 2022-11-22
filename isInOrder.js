import Compare from './EDAComJs/ordenacaoEBusca/compare.js';

export const isInOrder = (array, compareFn = Compare.defaultCompare) => {
  const { length } = array;

  for (let i = 1; i < length; i++) {
    if (compareFn(array[i], array[i - 1]) === Compare.LESS_THAN) {
      return false;
    }
  }

  return true;
};
