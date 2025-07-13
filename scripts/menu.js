// ----- * Go back to instruction page * ----- //
function instructionPage() {
  window.location.href = "index.html";
}

// Find the back button and add click event
const goBackBtn = document.querySelector(".back");
if (goBackBtn) {
  goBackBtn.addEventListener("click", instructionPage);
}

// ----- * Handle egg option selection * ----- //

// Select all egg option buttons (with data-minutes attribute)
const eggOptions = document.querySelectorAll(".egg-option");

// Loop through each option and add click event
eggOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const timeInMinutes = option.dataset.minutes; // Get selected time

    // Store time and go to timer page
    localStorage.setItem("eggTime", timeInMinutes);
    window.location.href = "timer.html";
  });
});
