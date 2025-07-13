// Sound file: 2-Alarm.wav by Leoctiurs
// Source: https://freesound.org/s/428221/
// License: Attribution 4.0 International (CC BY 4.0)

const displayTimer = document.querySelector(".app__timer-display");
const timesUp = document.querySelector(".app__timer-subtitle");
const alarmSound = new Audio("../assets/alarm-sound.mp3");

// ✅ Only call this once — and using correct key
function playAlarm() {
  const allowSound = sessionStorage.getItem("allowSound");
  if (allowSound === "true") {
    alarmSound.play().catch((err) => {
      console.warn("Audio play blocked:", err);
    });
  } else {
    console.warn("Audio not allowed on this device/session.");
  }
}

const storedTime = localStorage.getItem("eggTime");
const minutes = parseInt(storedTime, 10);
let seconds = minutes * 60;

// ✅ Show timer right away
displayTimer.textContent = `${minutes}:00`;

const countdown = setInterval(() => {
  seconds--;

  if (seconds <= 0) {
    clearInterval(countdown);

    timesUp.innerHTML = `Your egg is done.<br> Enjoy!`;
    displayTimer.innerHTML = `<button class="start-over-btn">Start Over</button>`;

    playAlarm();

    const restartBtn = document.querySelector(".start-over-btn");
    if (restartBtn) {
      restartBtn.addEventListener("click", () => {
        alarmSound.pause();
        alarmSound.currentTime = 0;
        window.location.href = "index.html";
      });
    }

    return;
  }

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  displayTimer.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
}, 1000);
