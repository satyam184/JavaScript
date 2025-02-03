const MatrixTranspose = (Matrix) => {
  let MatrixRows = Matrix.length;
  let MatrixColumns = Matrix[0].length;

  let result = [];
  for (let i = 0; i < MatrixRows; i++) {
    for (let j = 0; j < MatrixColumns; j++) {
      if (!result[j]) {
        result[j] = [];
      }
      result[j][i] = Matrix[i][j];
    }
  }
  return result;
};
const Matrix = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(MatrixTranspose(Matrix));
