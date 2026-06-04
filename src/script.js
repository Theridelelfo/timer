const display = document.getElementById("display");
const button = document.getElementById("start");

button.addEventListener("click", () => {
  let time = parseInt(display.textContent, 10);

  const interval = setInterval(() => {
    time--;

    display.textContent = time;

    if (time <= 0) {
      clearInterval(interval);
      display.textContent = "Done!";
    }
  }, 1000);
});