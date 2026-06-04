const display = document.getElementById("display");
const button = document.getElementById("start");

button.addEventListener("click", () => {
  display.textContent = "Clicked!";
});