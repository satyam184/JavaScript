const LargestArray = (arr) => {
  // if(arr.length === 0 || arr === null){
  //   throw new  Error("Array is empty  or null")
  // }
  // let largest = 0;
  // arr.map((item) => {
  //   if (item > largest) {
  //     largest = item;
  //   }
  // });
  // return largest;

  const maxNumber = Math.max(...arr);
  {
    return maxNumber;
  }
};

console.log(LargestArray([1, 5, 92, 3, 901]));
console.log(LargestArray([1, 5, 9200, 3, 901]));
console.log(LargestArray([123450, 5, 92, 3, 901]));
console.log(LargestArray([]));
