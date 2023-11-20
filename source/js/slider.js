const slider = document.querySelector('.example__compare');
const before = slider.querySelector('.example__compare-image-wrapper--before');
const after = slider.querySelector('.example__compare-image-wrapper--after');
const beforeImage = before.querySelector('img');
const afterImage = after.querySelector('img');
const switcher = slider.querySelector('.example__compare-switch');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width - `${width}px`;
});

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  afterImage.style.width + `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  after.style.width = `${slider.offsetWidth - shift}px`;
  switcher.style.left = `${shift}px`;
};

const pauseEvent = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

switcher.addEventListener('mousedown', () => {
  isActive = true;
});

slider.addEventListener('mouseup', () => {
  isActive = false;
});

slider.addEventListener('mouseleave', () => {
  isActive = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvent(e);
});

slider.addEventListener('touchstart', () => {
  isActive = true;
});

slider.addEventListener('touchend', () => {
  isActive = false;
});

slider.addEventListener('touchcancel', () => {
  isActive = false;
});

slider.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; e < e.changedTouches.length; i++) {
    x = e.changedTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvent(e);
});
