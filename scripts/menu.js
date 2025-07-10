function instructionPage() {
  window.location.href = "index.html?skipSplash=true"; // 👈 add flag
}

const goBackBtn = document.querySelector(".back");
goBackBtn.addEventListener("click", instructionPage);
