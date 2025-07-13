// ----- * Click Start Button to go to Menu page * ----- //
function menuPage() {
  window.location.href = "menu.html";
}

const startBtn = document.querySelector(".start");
if (startBtn) {
  startBtn.addEventListener("click", menuPage);
}
