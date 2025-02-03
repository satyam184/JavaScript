const Factorial = (num) => {
  //   let i = num;
  // let res = 1;
  //   while (i > 0) {
  //       res = res * i;
  //       i--;
  //   }
  //   console.log(res);
  if(num<0){
    throw new Error;
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * Factorial(num - 1);
};
// Factorial(4);
console.log(Factorial(-1));
