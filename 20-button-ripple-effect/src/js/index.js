import '../sass/main.scss';

const rippleBtnEl = document.querySelector('button.ripple');

rippleBtnEl.addEventListener('click', function (e) {
  const x = e.clientX;
  const y = e.clientY;

  const btnTop = e.target.offsetTop;
  const btnLeft = e.target.offsetLeft;

  const xInside = x - btnLeft;
  const yInside = y - btnTop;

  const circleEl = document.createElement('span');
  circleEl.classList.add('circle');
  circleEl.style.top = yInside + 'px';
  circleEl.style.left = xInside + 'px';
  this.append(circleEl);

  setTimeout(() => circleEl.remove(), 2000);
});
