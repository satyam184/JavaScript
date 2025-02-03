const isPalindrome = (str) => {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

const PalindromicSubString = (str) => {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const substr = str.slice(i, j);
      if (isPalindrome(substr) && substr.length > 1) {
        result.push(substr);
      }
    }
  }
  return result;
};
console.log(PalindromicSubString("bradarasdmadama"));
