let count = 0;

const counterEl = document.getElementById("counter");
const deployBtn = document.getElementById("deploy-btn");

deployBtn.addEventListener("click", () => {
  count++;
  counterEl.textContent = count;

  counterEl.classList.remove("bump");
  void counterEl.offsetWidth;
  counterEl.classList.add("bump");
});
