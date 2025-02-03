const SumOfDigit = (num) => {
  let res = 0;
  while (num > 0) {
    let digit = num % 10;
    num = Math.floor(num / 10);
    res = res + digit;
  }
  console.log(res);
};
SumOfDigit(123);
SumOfDigit(12);
SumOfDigit(200);
