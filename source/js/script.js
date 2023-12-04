let navToggle = document.querySelector(".main-header__toggle");

const jsWorked = function () {
  document.querySelector(".main-nav").classList.toggle("main-nav__noscript");
  navToggle.classList.add("main-header__toggle--closed");
  document.querySelector(".map").classList.remove("map__noscript");
};

jsWorked();

navToggle.addEventListener("click", function () {
  navToggle.classList.toggle("main-header__toggle--closed");
  navToggle.classList.toggle("main-header__toggle--opened");
});
