import '../sass/main.scss';

const openBtnEl = document.getElementById('open');
const closeBtnEl = document.getElementById('close');
const containerEl = document.querySelector('.container');

openBtnEl.addEventListener('click', function () {
  containerEl.classList.add('show-nav');
});

closeBtnEl.addEventListener('click', function () {
  containerEl.classList.remove('show-nav');
});
