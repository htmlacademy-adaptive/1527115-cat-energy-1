let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('main-header__toggle--closed');
  navToggle.classList.toggle('main-header__toggle--opened');
})
