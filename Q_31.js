const Parentheses = {
  "{": "}",
  "(": ")",
  "[": "]",
};

const isBalanced = (str) => {
  const Array = [];
  for (let char of str) {
    // console.log(char);
    if (Parentheses[char]) {
      Array.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const lastOpen = Array.pop();
      if (Parentheses[lastOpen] !== char) {
        return false;
      }
    }
  }
  return true;
};

let res = isBalanced("{[()}");
console.log(res);
