const SimplInterest = (p, i, y) => {
  let interest = 0;
  interest = (p * i * y) / 100;
  return interest;
};
console.log(SimplInterest(1000, 5, 1));
