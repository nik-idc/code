const fs = require("fs");

const readFileCallback = (err, data) => {
  if (err) {
    throw err;
  }

  console.log(`File read, contents:\n${data}`);
};

const callbacks = () => {
  fs.readFile("eval.js", readFileCallback);
};

module.exports = callbacks;
