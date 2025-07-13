// Get DOM elements
const display = document.querySelector(".app__timer-display"); // Countdown display
const subtitle = document.querySelector(".app__timer-subtitle"); // Message when done
const alarm = new Audio("../assets/alarm-sound.mp3"); // Alarm sound

// Get the stored egg time in minutes and convert to seconds
const minutes = parseInt(localStorage.getItem("eggTime"), 10);
let seconds = minutes * 60;

// Show initial time immediately
display.textContent = `${minutes}:00`;

// Start countdown every second
const interval = setInterval(() => {
  seconds--; // Decrease time by 1 second

  // Convert seconds to mm:ss format
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  display.textContent = `${min}:${sec.toString().padStart(2, "0")}`;

  // When time is up
  if (seconds <= 0) {
    clearInterval(interval); // Stop the countdown

    // Show completion message and button
    subtitle.innerHTML = `Your egg is done.<br> Enjoy!`;
    display.innerHTML = `<button class="start-over-btn">Start Over</button>`;

    // Play the alarm sound
    alarm.play();

    // Handle "Start Over" button click
    document.querySelector(".start-over-btn").addEventListener("click", () => {
      alarm.pause(); // Stop sound
      alarm.currentTime = 0; // Reset sound
      window.location.href = "index.html"; // Go back to menu
    });
  }
}, 1000);
