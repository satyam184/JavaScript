const Swapping = (a, b) => {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(a, b);
};
Swapping(1, 2);
