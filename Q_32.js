const bigString =
  "this is a big string with the word big repeated in big string";

const wordToFind = "big";

// console.log(bigString.indexOf("big"));
// console.log(bigString.indexOf("big", 11));
// console.log(bigString.indexOf("big", 36));

const wordOcurr = (bigString, wordToFind) => {
  let index = bigString.indexOf(wordToFind);
  let result = [];
  while (index !== -1) {
    result.push(index);
    index = bigString.indexOf(wordToFind, index + 1);
  }
  console.log(result);
};

wordOcurr(bigString, wordToFind);
