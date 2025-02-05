const Checkpalindrome = (str) => {
  //   let reversed = str.split("").reverse().join("");
  //   return str === reversed;
  // ----------------------------------------------------------
  //   for (let i = 0; i < str.length/ 2; i++) {
  //     if (str[i] !== str[str.length - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // -----------------------------------------------------------
  let s = 0;
  let e = str.length - 1;

  for (s, e; s < e/2; s++, e--) {
    if (str[s] !== str[e]) {
      return false;
    }
  }
  return true;
};

console.log(Checkpalindrome("madame"));
console.log(Checkpalindrome("madam"));
console.log(Checkpalindrome("mam"));
