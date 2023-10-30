let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('main-header__toggle--closed')) {
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    navToggle.classList.remove('main-header__toggle--opened');
    navToggle.classList.add('main-header__toggle--closed');
  }
})
