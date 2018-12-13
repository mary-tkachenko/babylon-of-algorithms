
//creating a matrix
function createMatrix(cols, rows) {
  const arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.round(Math.random(10) * 10);
    }
  }
  return arr;
}

//getting a new I
function getRotatedI(paramJ) {
  return paramJ;
}

//getting a new J
function getRotatedJ(arrLength, paramI) {
  return arrLength - 1 - paramI;
}

//rotating a matrix
function rotate(matrixSource) {
  console.log(matrixSource);
  const newMatrix = new Array(matrixSource.length);
  for (let i = 0; i < newMatrix.length; i++) {
    newMatrix[i] = new Array(newMatrix.length);
    for (let j = 0; j < newMatrix[i].length; j++) {
      newMatrix[i][j] = false;
    }
  }

  for (let i = 0; i < matrixSource.length; i ++) {
    for (let j = 0; j < matrixSource[i].length; j++) {
      const rotatedJ = getRotatedJ(matrixSource[i].length, i);
      const rotatedI = getRotatedI(j);
      newMatrix[rotatedI][rotatedJ] = matrixSource[i][j];
      console.log(newMatrix);
    }
  }
}

const myMatrix = createMatrix(2, 2);
rotate(myMatrix);
