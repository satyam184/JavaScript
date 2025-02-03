const ArmStrongNumber = (num) => {
  //   let count = 0;
  //   let sum = 0;
  //   let n = num;
  //   while (n) {
  //     count++;
  //     n = Math.floor(n / 10);
  //   }
  //   n = num;
  //   while (n) {
  //     let digit = n % 10;
  //     sum = sum + Math.pow(digit, count);
  //     n = Math.floor(n / 10);
  //   }

  //   return sum === num;

  const digit = String(num).split("");
  const count = digit.length;
  const sum = digit.reduce((acc, n) => acc + Math.pow(n, count), 0);
  return num === sum;
};

console.log(ArmStrongNumber(243));
console.log(ArmStrongNumber(153));
console.log(ArmStrongNumber(9474));
