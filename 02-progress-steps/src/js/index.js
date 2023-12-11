import '../sass/main.scss';

const progressEl = document.getElementById('progress');
const prevBtnEl = document.getElementById('prev');
const nextBtnEl = document.getElementById('next');
const circleElList = document.querySelectorAll('.circle');

let currentActive = 1;

const update = function () {
  circleElList.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  progressEl.style.width =
    (100 / (circleElList.length - 1)) * (currentActive - 1) + '%';

  if (currentActive === 1) {
    prevBtnEl.disabled = true;
  } else if (currentActive === 4) {
    nextBtnEl.disabled = true;
  } else {
    prevBtnEl.disabled = false;
    nextBtnEl.disabled = false;
  }
};

nextBtnEl.addEventListener('click', function () {
  currentActive++;

  if (currentActive > circleElList.length) currentActive = circleElList.length;

  update();
});

prevBtnEl.addEventListener('click', function () {
  currentActive--;

  if (currentActive < 1) currentActive = 1;

  update();
});
