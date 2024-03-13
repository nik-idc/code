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

const createMat1D = (rows, cols) => {
  let arr = [];
  for (let row = 1; row <= rows; row++) {
    for (let col = 1; col <= cols; col++) {
      arr.push(row * col);
    }
  }

  return arr;
};

/**
 * Print matrix
 * @param {number[][]} mat Matrix
 */
const printMat = (mat) => {
  for (const row of mat) {
    console.log(row);
  }
};

/**
 * Calculates sum of all matrix's elements
 * @param {number[]} row
 * @returns Sum of all matrix's elements
 */
const matRowSum = (row) => {
  let sum = 0;

  for (const cell of row) {
    sum += cell;
  }

  return sum;
};

/**
 * Calculates sum of all matrix's elements
 * @param {number[][]} mat
 * @returns Sum of all matrix's elements
 */
const matSum = (mat) => {
  let sum = 0;

  for (const row of mat) {
    for (const cell of row) {
      sum += cell;
    }
  }

  return sum;
};

/**
 * Calculates matrix elements' sum using 'spawn'
 * @param {number[][]} mat Matrix array
 */
const sumUsingSpawn = (mat) => {
  const p = new Parallel(mat, {
    evalPath: "eval.js",
  });

  const before = performance.now();

  p.spawn(matSum).then((data) => {
    const after = performance.now();
    console.log(`spawn sum done, result: ${data}`);
    console.log(`done in: ${after - before} ms`);
  });
};

/**
 * Calculates sum of matrix's row elements
 * @param {number[]} row
 * @returns Sum of all elements in a row
 */
const matRowSumForMap = (row) => {
  let sum = 0;

  for (const cell of row) {
    sum += cell;
  }

  return sum;
};

/**
 * Calculates matrix elements' sum using 'map'
 * @param {number[][]} mat Matrix array
 */
const sumUsingMap = (mat) => {
  const p = new Parallel(mat, {
    evalPath: "eval.js",
  });

  const before = performance.now();

  p.map(matRowSumForMap).then((data) => {
    const afterMap = performance.now();
    console.log(`map sum of rows done`);
    console.log(`done in: ${afterMap - before} ms`);

    let finalSum = 0;
    for (const sum of data) {
      finalSum += sum;
    }

    const afterFinalSum = performance.now();
    console.log(`map sum done, result: ${finalSum}`);
    console.log(`done in: ${afterFinalSum - before} ms`);
  });
};

/**
 * Calculates sum of matrix's row elements and current value in 'reduce'
 * @param {number[]} data Reduce data
 * @returns Sum of current rows sum and sum of next row
 */
const matRowSumForReduce = (data) => {
  return data[0] + data[1];
};

/**
 * Calculates matrix elements' sum using 'reduce'
 * @param {number[]} mat1d Matrix array
 */
const sumUsingReduce = (mat1d) => {
  const p = new Parallel(mat1d, {
    evalPath: "eval.js",
  });

  const before = performance.now();

  p.reduce(matRowSumForReduce).then((data) => {
    const after = performance.now();
    console.log(`reduce sum done, result: ${data}`);
    console.log(`done in: ${after - before} ms`);
  });
};

const paralleljs_timings = async () => {
  const dims = [200, 200];
  const mat = createMat(...dims);
  const mat1d = createMat1D(...dims);
//   printMat(mat);
  sumUsingSpawn(mat);
  sumUsingMap(mat);
  sumUsingReduce(mat1d);
};

paralleljs_timings();

module.exports = paralleljs_timings;
