export default class Compare {
  static LESS_THAN = -1;
  static BIGGER_OR_EQUALS_THAN = 1;

  static defaultCompare(a, b) {
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_OR_EQUALS_THAN;
  }
}
