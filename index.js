const menuButton = document.querySelector(".menu");
const closeButton = document.querySelector(".close-menu");
const mobileMenu = document.querySelector(".mobile-nenu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});
