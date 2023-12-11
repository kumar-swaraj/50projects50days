import '../sass/main.scss';

const searchEl = document.querySelector('.search');
const inputEl = searchEl.querySelector('.search__input');
const btnEl = searchEl.querySelector('.search__btn');

btnEl.addEventListener('click', function () {
  searchEl.classList.toggle('active');

  if (searchEl.classList.contains('active')) {
    inputEl.focus();
  } else {
    inputEl.blur();
  }
});
