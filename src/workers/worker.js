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
