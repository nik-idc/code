const callbacks = require("./callbacks");
const promises = require("./promises");
const paralleljs = require("./parallel");

const main = async () => {
  console.log("Callbacks:");
  callbacks();

  console.log("Promises:");
  await promises();

  console.log("paralleljs:");
  await paralleljs();
};

main();
