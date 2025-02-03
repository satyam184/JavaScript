const CountWord = (str) => {
  //   let count = 1;
  //   for (let i = 0; i < str.length; i++) {
  //     if (str[i] === " ") {
  //         count++;
  //       continue;
  //     }
  //   }
  //   console.log(count);

  let SplittedWord = str.split(" ");
  let CountWords = SplittedWord.filter((elt) => elt != "");
  console.log(CountWords.length);
};
console.log(CountWord("This is a sentence"));
console.log(CountWord("What is the date today"));
console.log(CountWord(""));
console.log(CountWord("  Hello world  "));
console.log(CountWord("State-of-the-art technology"));
