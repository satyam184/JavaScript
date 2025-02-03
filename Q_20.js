const FizzBuzz = (n) => {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      if (i % 5 === 0) {
        arr.push("Fizz Buzz");
      } else {
        arr.push("Fizz");
      }
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};
console.log(FizzBuzz(36));
