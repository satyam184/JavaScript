// const rectangle = (a, b) => {
//   let area = a * b;
//   console.log(area)
// };

// rectangle(2,2)
// rectangle(2,3)

const rectangle = (a, b) => {
  if (a <= 0) {
    throw new RangeError("length should be +ve");
  }
  if (b <= 0) {
    throw new RangeError("width should be +ve");
  }
  const area = a * b;
  console.log(area);
};

rectangle(-3, 4);
rectangle(3, -4);
