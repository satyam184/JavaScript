const Power = (b, e) => {
  let res = 1;
  for (let i = 1; i <= e; i++) {
    res = res * b;
  }
  return res;
};
console.log(Power(2, 3));
console.log(Power(5, 4));
