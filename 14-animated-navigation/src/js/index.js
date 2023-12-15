import '../sass/main.scss';

const navBtnEl = document.getElementById('nav-toggle');

navBtnEl.addEventListener('click', function (e) {
  e.target.closest('.navigation').classList.toggle('active');
});
