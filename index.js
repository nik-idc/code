const callbacks = require("./callbacks");
const paralleljs = require("./parallel");
const promises = require("./promises");

const main = async () => {
  console.log("Callbacks:");
  callbacks();

  console.log("paralleljs:");
  await paralleljs();

  console.log("Promises:");
  await promises();
};

main();
