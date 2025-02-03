const prompt = require("prompt-sync");

let input = prompt("Number of dice: ");
let input2 = prompt("Number of sides: ");

const RollDice = (input, input2) => {
  let res = [];
  while (input >= 1) {
    let dice = Math.floor(Math.random() * input2) + 1;
    res.push(dice);
    input--;
  }
  console.log(res);
};
RollDice(input, input2);
