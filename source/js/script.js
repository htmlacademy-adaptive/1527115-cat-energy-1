let navToggle = document.querySelector('.main-header__toggle');

const jsWorked = function () {
  document.querySelector('.main-nav').classList.toggle('main-nav__nojs')
  navToggle.classList.add('main-header__toggle--closed');
  navToggle.classList.remove('main-header__toggle--opened');
}

jsWorked();

navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('main-header__toggle--closed');
  navToggle.classList.toggle('main-header__toggle--opened');
})
