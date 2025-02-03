const CountCharacter = (str) => {
  //   str = str.toLowerCase();
  //   charCount = {};
  //   for (let chr of str) {
  //     charCount[chr] = (charCount[chr] || 0) + 1;
  //   }
  //   return charCount;
  //   --------------------------------------------------------
  //   str = str.toLowerCase();
  //   const result = {};
  //   for (let i = 0; i <= str.length-1; i++) {
  //     if (!result[str[i]]) {
  //       result[str[i]] = 0;
  //     }
  //     result[str[i]] = result[str[i]] + 1;
  //   }
  //   return result;
  //   ----------------------------------------------------------
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (!acc[char]) {
        acc[char] = 0;
      }
      acc[char] = acc[char] + 1;
      return acc;
    }, {});
};
const res = CountCharacter("Ashish Saluja");
console.log(res);
