const PrimeNumber = (num) => {
  //   for (let i = 2; i < num; i++) {
  //     if (num % i === 0) {
  //       return false;
  //     }
  //   }
  //   return true;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(PrimeNumber(68));
console.log(PrimeNumber(71));
console.log(PrimeNumber(37));
