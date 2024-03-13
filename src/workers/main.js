const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const result = document.querySelector(".result");

if (window.Worker) {
  const myWorker = new Worker("worker.js");

  [number1, number2].forEach((input) => {
    input.onchange = function () {
      myWorker.postMessage([number1.value, number2.value]);
      console.log("Message posted to worker");
    };
  });

  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log("Message received from worker");
  };
} else {
  console.log("Your browser doesn't support web workers.");
}
