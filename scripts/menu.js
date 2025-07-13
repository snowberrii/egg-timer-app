// ----- * Direct to instruction page * ----- //
function instructionPage() {
  window.location.href = "index.html";
}

const goBackBtn = document.querySelector(".back");
if (goBackBtn) {
  goBackBtn.addEventListener("click", instructionPage);
}

// ----- * Direct to Countdown Timer after Choosing Egg option * ----- //
const alarmSound = new Audio("../assets/alarm-sound.wav"); // Preload sound

const eggOptions = document.querySelectorAll(".egg-option");

eggOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // 🧠 Unlock audio on user click (iOS fix)
    alarmSound
      .play()
      .then(() => {
        alarmSound.pause();
        alarmSound.currentTime = 0;
      })
      .catch(() => {
        // Ignore errors silently — this just "unlocks" audio for later
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
