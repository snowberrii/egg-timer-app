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

    // Prime audio for iOS
    const audio = new Audio("assets/alarm-sound.mp3");
    audio
      .play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        sessionStorage.setItem("allowSound", "true");
      })
      .catch(() => {
        sessionStorage.setItem("allowSound", "false");
      });

    if (timeInMinutes) {
      localStorage.setItem("eggTime", timeInMinutes);
      window.location.href = "timer.html";
    } else {
      alert("⚠️ Something went wrong. Please try again.");
    }
  });
});
