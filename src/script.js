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
        button.textContent = "Start"; // reset finale
      }
    );

    button.textContent = "Stop"; // cambia subito
  } 
  // se attivo → stop
  else {
    clearInterval(intervalId);
    intervalId = null;

    button.textContent = "Start"; // torna a Start
  }
});