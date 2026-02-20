const container = document.getElementById("container");
const desktopBtn = document.getElementById("desktopBtn");
const mobileBtn = document.getElementById("mobileBtn");

mobileBtn.addEventListener("click", () => {
  container.classList.add("mobile-view");
  mobileBtn.classList.add("active");
  desktopBtn.classList.remove("active");
});

desktopBtn.addEventListener("click", () => {
  container.classList.remove("mobile-view");
  desktopBtn.classList.add("active");
  mobileBtn.classList.remove("active");
});