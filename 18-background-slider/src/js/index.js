import '../sass/main.scss';

const slideEls = document.querySelectorAll('.slide');
const leftBtnEl = document.getElementById('left');
const rightBtnEl = document.getElementById('right');

let activeSlide = 0;

const setBgToBody = function () {
  document.body.style.backgroundImage =
    slideEls[activeSlide].style.backgroundImage;
};

const setActiveSlide = function () {
  slideEls.forEach((slide) => slide.classList.remove('active'));

  slideEls[activeSlide].classList.add('active');
};

const handlePreviousSlide = function () {
  activeSlide--;

  if (activeSlide <= -1) {
    activeSlide = slideEls.length - 1;
  }

  setActiveSlide();
  setBgToBody();
};

const handleNextSlide = function () {
  activeSlide++;

  if (activeSlide >= slideEls.length) {
    activeSlide = 0;
  }

  setActiveSlide();
  setBgToBody();
};

const handleKeyboardEvents = function (e) {
  if (e.key === 'ArrowLeft') handlePreviousSlide();
  if (e.key === 'ArrowRight') handleNextSlide();
};

const init = function () {
  leftBtnEl.addEventListener('click', handlePreviousSlide);
  rightBtnEl.addEventListener('click', handleNextSlide);

  document.addEventListener('keydown', handleKeyboardEvents);

  setBgToBody();
};
init();
