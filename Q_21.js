const Pyramid = (num) => {
  for (let i = 1; i <= num; i++) {
    let line = "";
    for (let space = 1; space <= num - i; space++) {
      line = line + " ";
    }
    for (let j = 1; j <= i; j++) {
      line = line + j;
    }
    for (let z = i - 1; z >= 1; z--) {
      line = line + z;
    }
    console.log(line);
  }
};
Pyramid(5);
