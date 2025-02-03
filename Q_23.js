const AlphabeticalOrder = (str) => {
  str = str.toLowerCase();
  console.log(str);
  str = str.replace(/ /g, "");
  for (let i = 0; i <= str.length - 1; i++) {
    if (/[a-z]/.test(str[i]) && str[i] > str[i + 1]) {
      return false;
    }
  }
  return true;
};

console.log(AlphabeticalOrder("aBcD"));
console.log(AlphabeticalOrder('a1b2c3d4'));
