// Sound file: 2-Alarm.wav by Leoctiurs
// Source: https://freesound.org/s/428221/
// License: Attribution 4.0 International (CC BY 4.0)

const displayTimer = document.querySelector(".app__timer-display"); // display countdown time
const timesUp = document.querySelector(".app__timer-subtitle"); // will display back to menu button after time is up
const alarmSound = new Audio("../assets/alarm-sound.wav");

const Timestored = localStorage.getItem("eggTime"); // get time that was previously stored when choosing the egg
const minutes = parseInt(Timestored, 10); // change time string in dataset(time) to integer

let seconds = minutes * 60;

const countdown = setInterval(() => {
  if (seconds <= 0) {
    clearInterval(countdown);
    timesUp.innerHTML = `Your egg is done.<br> Enjoy!`;
    displayTimer.innerHTML = `<button class="back-to-menu-btn">Back to Menu</button>`;
    alarmSound.play(); // play sound when done

    const backToMenuBtn = document.querySelector(".back-to-menu-btn");
    if (backToMenuBtn) {
      backToMenuBtn.addEventListener("click", () => {
        if (!alarmSound.paused) {
          alarmSound.pause();
          alarmSound.currentTime = 0; // Reset sound to start
        }
        window.location.href = "index.html";
      });
    }
    return; // Important: stop execution here after timer ends
  }

  seconds--;

  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  displayTimer.textContent = `${min}:${sec.toString().padStart(2, "0")}`;
}, 1000);
