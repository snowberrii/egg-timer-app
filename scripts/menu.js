function instructionPage() {
  window.location.href = "index.html";
}

const goBackBtn = document.querySelector(".back");
goBackBtn.addEventListener("click", instructionPage);


function countdownPage() {
  window.location.href = "timer.html";
}

const runnyYolk = document.querySelector("#runny-yolk");
const softBoiled = document.querySelector("#soft-boiled");
const mediumBoiled = document.querySelector("#medium-boiled");
const hardBoiled = document.querySelector("#hard-boiled");


runnyYolk.addEventListener("click", countdownPage);
softBoiled.addEventListener("click", countdownPage);
mediumBoiled.addEventListener("click", countdownPage);
hardBoiled.addEventListener("click", countdownPage);
