const TipCalculator = (A, arr) => {
  let tip = [];
  arr.map((elt) => {
    tip.push(A * (elt / 100));
  });
  return tip;
};
console.log(TipCalculator(1000, [5, 10, 15]));
