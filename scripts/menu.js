// ----- * Direct to instruction page * ----- //
function instructionPage() {
  window.location.href = "index.html";
}

const goBackBtn = document.querySelector(".back");
if (goBackBtn) {
  goBackBtn.addEventListener("click", instructionPage);
}

// ----- * Direct to Countdown Timer after Choosing Egg option * ----- //

const eggOptions = document.querySelectorAll(".egg-option");

eggOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sessionStorage.setItem("audioUnlocked", "true"); // allow sound in next page

    const timeInMinutes = option.dataset.minutes;

    if (timeInMinutes) {
      localStorage.setItem("eggTime", timeInMinutes);
      window.location.href = "timer.html";
    } else {
      alert("⚠️ Something went wrong. Please try again.");
    }
  });
});
