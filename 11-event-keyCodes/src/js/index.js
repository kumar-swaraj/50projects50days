import '../sass/main.scss';

const keyElsList = document.querySelectorAll('.key');

keyElsList.forEach((keyEl, idx) => {
  if (idx === keyElsList.length - 1) return;
  keyEl.style.display = 'none';
});

document.addEventListener('keyup', function (e) {
  keyElsList.forEach((keyEl, idx) => {
    if (idx === keyElsList.length - 1) {
      keyEl.style.display = 'none';
      return;
    }

    const spanEl = keyEl.querySelector('span');

    if (idx === 0) spanEl.textContent = e.key === ' ' ? 'space' : e.key;
    if (idx === 1) spanEl.textContent = e.keyCode;
    if (idx === 2) spanEl.textContent = e.code;
    keyEl.style.display = 'inline-flex';
  });
});
