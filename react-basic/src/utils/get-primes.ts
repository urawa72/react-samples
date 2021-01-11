export const getPrimes = (maxRange: number): number[] => {
  console.log('primes calced');

  return [...Array(maxRange)]
    .map((_, i) => i + 1)
    .filter((n) => {
      for (let i = 2; i < n; i += 1) {
        if (n % i === 0) return false;
      }
      return true;
    });
};
