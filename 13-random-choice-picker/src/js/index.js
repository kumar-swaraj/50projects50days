import '../sass/main.scss';

const tagsEl = document.getElementById('tags');
const textareaEl = document.getElementById('textarea');

textareaEl.focus();

// min inclusive, max exclusive
const randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

const createTags = function (input) {
  const tagList = input
    .split(',')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  tagsEl.innerHTML = '';

  tagList.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.textContent = tag;

    tagsEl.append(tagEl);
  });
};

const randomSelect = function () {
  const tagsElList = tagsEl.querySelectorAll('.tag');
  if (tagsElList.length === 0) return;

  let times = randomNumber(30, 50);
  let count = 0;

  const interval = setInterval(() => {
    if (count >= times - 1) {
      clearInterval(interval);
    }

    if (count === tagsElList.length) {
      times -= tagsElList.length;
      count = 0;
    }

    tagsElList.forEach((tagEl) => tagEl.classList.remove('highlight'));
    tagsElList[count].classList.add('highlight');
    count++;
  }, 100);
};

textareaEl.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 100);

    randomSelect();
  }
});
