export class Fibonacci {
  static fibonacci(n) {
    if (n < 1) {
      return 0;
    }

    if (n <= 2) {
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  }

  static fibonacciMemorization(n) {
    const memo = [0, 1];

    const fibonnaci = (n) => {
      if (memo[n] != null) return memo[n];
      return (memo[n] = fibonnaci(n - 1) + fibonnaci(n - 2));
    };

    return fibonnaci(n);
  }
}
