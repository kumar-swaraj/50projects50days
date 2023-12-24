import '../sass/main.scss';

const cardImgEl = document.getElementById('cardImg');
const titleEl = document.getElementById('title');
const excerptEl = document.getElementById('excerpt');
const cardAuthorImgEl = document.getElementById('cardAuthorImg');
const authorNameEl = document.getElementById('name');
const postDateEl = document.getElementById('date');

const animateBgEls = document.querySelectorAll('.animate-bg');
const animateBgTextEls = document.querySelectorAll('.animate-bg--text');

const getData = function () {
  cardImgEl.src =
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  cardImgEl.alt = 'laptop on desk';

  titleEl.textContent = 'Lorem ipsum dolor sit amet.';
  excerptEl.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ipsa.';

  cardAuthorImgEl.src = 'https://randomuser.me/api/portraits/men/45.jpg';
  cardImgEl.alt = 'John Doe';

  authorNameEl.textContent = 'John Doe';
  postDateEl.textContent = 'Oct 08th, 2020';

  animateBgEls.forEach((bg) => bg.classList.remove('animate-bg'));
  animateBgTextEls.forEach((bg) => bg.classList.remove('animate-bg--text'));
};

setTimeout(getData, 5000);
