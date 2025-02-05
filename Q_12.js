const Factor = (num) => {
  const factor = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factor.push(i);
    }
  }
  return factor;
};
// console.log(Factor(35));
// ------------------------
// using spread operator
const res = Factor(35);
console.log(...res)