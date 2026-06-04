import { createCountdown } from "./timer.js";

const display = document.getElementById("display");
const button = document.getElementById("start");

button.addEventListener("click", () => {
  const startValue = parseInt(display.textContent, 10);

  createCountdown(
    startValue,
    (time) => {
      display.textContent = time;
    },
    () => {
      display.textContent = "Done!";
    }
  );
});