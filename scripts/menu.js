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
    const timeInMinutes = option.dataset.minutes;

    if (timeInMinutes) {
      localStorage.setItem("eggTime", timeInMinutes);
      window.location.href = "timer.html";
    } else {
      alert("⚠️Something Went Wrong : Please Try Again Later");
    }
  });
});
