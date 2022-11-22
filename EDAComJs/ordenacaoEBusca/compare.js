export default class Compare {
  static LESS_THAN = -1;
  static EQUALS_THAN = 0;
  static BIGGER_THAN = 1;

  static defaultCompare(a, b) {
    return a < b
      ? Compare.LESS_THAN
      : a > b
      ? Compare.BIGGER_THAN
      : Compare.EQUALS_THAN;
  }
}
