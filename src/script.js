import { createCountdown } from "./timer.js";

const display = document.getElementById("display");
const button = document.getElementById("start");

let intervalId = null;

button.addEventListener("click", () => {
  // START
  if (intervalId === null) {
    const startValue = parseInt(display.textContent, 10);

    intervalId = createCountdown(
      startValue,
      (time) => {
        display.textContent = time;
      },
      () => {
        display.textContent = "Done!";
        intervalId = null;
        button.textContent = "Start";
      }
    );

    button.textContent = "Stop";
  } 
  // STOP
  else {
    clearInterval(intervalId);
    intervalId = null;

    button.textContent = "Start";
  }
});