// ----- * Direct to instruction page * ----- //
function instructionPage() {
  window.location.href = "index.html";
}

const goBackBtn = document.querySelector(".back");
if (goBackBtn) {
  goBackBtn.addEventListener("click", instructionPage);
}

// ----- * Direct to Countdown Timer after Choosing Egg option * ----- //
const alarmSound = new Audio("../assets/alarm-sound.mp3"); // Preload sound for timer page

const eggOptions = document.querySelectorAll(".egg-option");

eggOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // 🔓 Required on iPhone: trigger audio in direct response to user interaction
    alarmSound.play().then(() => {
      alarmSound.pause();
      alarmSound.currentTime = 0;
      sessionStorage.setItem("allowSound", "true"); // flag for timer page
    });

    const timeInMinutes = option.dataset.minutes;

    if (timeInMinutes) {
      localStorage.setItem("eggTime", timeInMinutes);
      window.location.href = "timer.html";
    } else {
      alert("⚠️ Something went wrong. Please try again.");
    }
  });
});
