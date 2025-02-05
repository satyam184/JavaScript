const Average = (arr) => {
  let sum = 0;
  let size = arr.length;
  let res = 0;
  for (let i = 0; i < size; i++) {
    sum = sum + arr[i];
  }
  res = sum / size;
  return res;
};
console.log(Average([1, 2, 7, 14]));
console.log(Average([1, 2, 4]));
console.log(Average([1, 5, 7, 35]));
