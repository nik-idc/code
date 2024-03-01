const Parallel = require("paralleljs");

const createMat = (rows, cols) => {
  const mat = [];
  for (let row = 1; row <= rows; row++) {
    let arr = [];
    for (let col = 1; col <= cols; col++) {
      arr.push(row * col);
    }
    mat.push(arr);
  }

  return mat;
};

const matSum = (row) => {
  let sum = 0;
  for (const num of row) {
    sum += num;
  }
  return sum;
};

const matDiagSum = (mat) => {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j];
    }
  }

  return sum;
};

const arrMulti = (valueAndCur) => {
  const value = valueAndCur[0];
  const cur = valueAndCur[1];
  return value * cur;
};

const main = async () => {
  // Matrix
  const mat = createMat(5, 5);
  console.log(mat);

  // Spawn
  let p = new Parallel(mat, {
    evalPath: "eval.js",
  });

  p.spawn(matDiagSum).then((data) => {
    console.log(`spawn done: ${JSON.stringify(data)}`);
  });

  // Map
  p = new Parallel(mat, {
    evalPath: "eval.js",
  });

  p.map(matSum).then((data) => {
    console.log(`map done: ${data}`);
  });

  // Reduce
  p = new Parallel(mat, {
    evalPath: "eval.js",
  });

  p.map(matSum)
    .reduce(arrMulti)
    .then((data) => {
      console.log(`reduce done: ${data}`);
    });
};

main();
