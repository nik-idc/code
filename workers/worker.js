// onmessage = function (e) {
//   console.log("Worker: Message received from main script");
//   let sum = 0;
//   for (let i = 0; e.data * 10; i++) {
//     sum += (i + 1) * 10;
//   }
//   const workerResult = "Result: " + result;
//   console.log("Worker: Posting message back to main script");
//   postMessage(workerResult);
// };

onmessage = function (e) {
  console.log("Worker: Message received from main script");
  let result = 0;
  setInterval(() => {
    result = (e.data[0] + e.data[1]) ** 9;
    if (isNaN(result)) {
      postMessage("oops");
    } else {
      const workerResult = "Result: " + result;
      console.log(
        `Worker: Posting message ${workerResult} back to main script`
      );
      postMessage(workerResult);
    }
  }, 2500);
};
