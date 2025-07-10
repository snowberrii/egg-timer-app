// ----- * Click Start Button to go to Menu page * ----- //
function menuPage() {
  window.location.href = "menu.html";
}

const startBtn = document.querySelector(".start");
startBtn.addEventListener("click", menuPage);

// ----- * When click go back button, will return to instruction page without splash * ----- //
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const skipSplash = params.get("skipSplash");

  if (skipSplash === "true") {
    // Skip splash and show instruction directly
    document.querySelector(".splash-screen").classList.add("hidden");
    document.querySelector(".instruction-screen").classList.remove("hidden");
  } else {
    // Show splash, then fade into instruction
    setTimeout(() => {
      document.querySelector(".splash-screen").classList.add("hidden");
      document.querySelector(".instruction-screen").classList.remove("hidden");
    }, 3000); // or your desired splash delay
  }
});
