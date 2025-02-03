const MatrixMultiplication = (A, B) => {
  let ARows = A.length;
  let ACol = A[0].length;

  let BRows = B.length;
  let BCol = B[0].length;

  let C = Array(ARows)
    .fill(0)
    .map(() => Array(BCol).fill(0));

  for (let i = 0; i < ARows; i++) {
    for (let j = 0; j < BCol; j++) {
      for (let k = 0; k < ACol; k++) {
        C[i][j]+=A[i][k]*B[k][j]
      }
    }
  }
  return C;
};

const A = [
  [1, 2],
  [3, 4],
];
const B = [
  [5, 6],
  [7, 8],
];
console.log(MatrixMultiplication(A, B));
