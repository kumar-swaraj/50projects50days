import '../sass/main.scss';

const countersEls = document.querySelectorAll('.counter');

countersEls.forEach((counterEl) => {
  const target = +counterEl.dataset.target;
  let counter = 0;

  const interval = setInterval(() => {
    if (counter >= target) clearInterval(interval);

    counterEl.textContent = counter;
    counter += target / 200;
  }, 1);
});
