const Reverse = (a) => {
  //   let res="";
  //   for (let i = a.length - 1; i >= 0; i--) {
  //     res = res + a[i];
  //   }
  //   console.log(res)

  let spliited = a.split("");
  let reversed = spliited.reverse();
  let result = reversed.join("");
  return result;
};

console.log(Reverse("hello js"));
