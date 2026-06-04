import { createCountdown } from "./timer.js";

const display = document.getElementById("display");
const button = document.getElementById("start");

let intervalId = null;

button.addEventListener("click", () => {
  // se NON attivo → start
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
      }
    );
  } 
  // se attivo → stop
  else {
    clearInterval(intervalId);
    intervalId = null;
  }
});