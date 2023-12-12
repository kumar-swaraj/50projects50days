import '../sass/main.scss';

const leftEl = document.querySelector('.left');
const rightEl = document.querySelector('.right');
const containerEl = document.querySelector('.container');

leftEl.addEventListener('mouseenter', function () {
  containerEl.classList.add('hover-left');
});

leftEl.addEventListener('mouseleave', function () {
  containerEl.classList.remove('hover-left');
});

rightEl.addEventListener('mouseenter', function () {
  containerEl.classList.add('hover-right');
});

rightEl.addEventListener('mouseleave', function () {
  containerEl.classList.remove('hover-right');
});
