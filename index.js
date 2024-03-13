const callbacks = require("./src/callbacks");
const promises = require("./src/promises");
const paralleljs = require("./src/parallel");

const main = async () => {
  console.log("Callbacks:");
  callbacks();

  console.log("Promises:");
  await promises();

  console.log("paralleljs:");
  await paralleljs();
};

main();
