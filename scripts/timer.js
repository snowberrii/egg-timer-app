// Sound file: 2-Alarm.wav by Leoctiurs
// Source: https://freesound.org/s/428221/
// License: Attribution 4.0 International (CC BY 4.0)

const displayTimer = document.querySelector(".app__timer-display"); // display countdown time
const timesUp = document.querySelector(".app__timer-subtitle"); // will display back to menu button after time is up
const alarmSound = new Audio("../assets/alarm-sound.mp3"); // Preload sound

const Timestored = localStorage.getItem("eggTime"); // get time that was previously stored when choosing the egg
const minutes = parseInt(Timestored, 10); // change time string in dataset(time) to integer

let seconds = minutes * 60;

// 👇 Immediately display initial countdown before interval starts
const initialMin = Math.floor(seconds / 60);
const initialSec = seconds % 60;
displayTimer.textContent = `${initialMin}:${initialSec
  .toString()
  .padStart(2, "0")}`;

// Try playing, fallback if blocked
function playAlarm() {
  const isUnlocked = sessionStorage.getItem("audioUnlocked");

  // iOS or other browsers with restrictions
  if (isUnlocked === "true") {
    alarmSound.play().catch((err) => {
      console.warn("Audio blocked:", err);
    });
  } else {
    // Attempt anyway (desktop should allow it)
    alarmSound.play().catch((err) => {
      console.warn("Fallback audio failed:", err);
    });
  }
}

// Start countdown
const countdown = setInterval(() => {
  seconds--;

  if (seconds <= 0) {
    clearInterval(countdown);
    timesUp.innerHTML = `Your egg is done.<br> Enjoy!`;
    displayTimer.innerHTML = `<button class="start-over-btn">Start Over</button>`;
    playAlarm();

    const backToMenuBtn = document.querySelector(".start-over-btn");
    if (backToMenuBtn) {
      backToMenuBtn.addEventListener("click", () => {
        if (!alarmSound.paused) {
          alarmSound.pause();
          alarmSound.currentTime = 0; // Reset sound to start
        }
        window.location.href = "index.html";
      });
    }
    return;
  }

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  displayTimer.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
}, 1000);
