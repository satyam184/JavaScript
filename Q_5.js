const Smallest = (a, b, c) => {
  //   if (a < b && a < c) {
  //     console.log(a, "is smallest");
  //   } else if (b < c && b < a) {
  //     console.log(b, "is smallest");
  //   } else {
  //     console.log(c, "is smallest");
  //   }

  let SmallestNumber = a;
  if (b < SmallestNumber) {
    SmallestNumber = b;
  } else if (c < SmallestNumber) {
    SmallestNumber = c;
  }
  return SmallestNumber;
};

console.log(Smallest(1, 3, -2));
