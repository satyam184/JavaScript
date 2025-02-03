const table = (a, b) => {
  let i = 1;
  let res = 0;
  while (i <= b) {
    res = a * i;
    i++;
    console.log(res);
  }
};
table(4, 10);
