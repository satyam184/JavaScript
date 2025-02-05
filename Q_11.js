const VowelConsontant = (str) => {
  let vowels = 0;
  let consonants = 0;

  str = str.toLowerCase();
  str = str.replace(/ /g, "");
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      if ("aeiou".includes(str[i])) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }
  return [vowels, consonants];
};
let result = VowelConsontant("Hello World World");
console.log(result);
