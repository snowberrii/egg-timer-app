function instructionPage() {
  window.location.href = "index.html";
}

const goBackBtn = document.querySelector(".back");
goBackBtn.addEventListener("click", instructionPage);
