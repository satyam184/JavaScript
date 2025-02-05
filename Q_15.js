const PrimeNumber = (arr) => {
  arr.map((item) => {
    if (item % item === 0) {
      console.log(item);
    }
  });
};
PrimeNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]);
