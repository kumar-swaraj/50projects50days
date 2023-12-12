import '../sass/main.scss';

const bgEl = document.querySelector('.bg');
const loadtextEl = document.querySelector('.loading-text');

let load = Number.parseInt(loadtextEl.textContent);
const loadTextElOpacityOrg = window
  .getComputedStyle(loadtextEl)
  .getPropertyValue('opacity');
const bgElBlurOrg = Number.parseInt(
  window.getComputedStyle(bgEl).getPropertyValue('filter').replace('blur(', '')
);

const blurring = function () {
  load++;

  if (load > 99) clearInterval(int);

  loadtextEl.textContent = `${load}%`;
  loadtextEl.style.opacity = `${(loadTextElOpacityOrg - load / 100).toFixed(
    2
  )}`;
  bgEl.style.filter = `blur(${(
    bgElBlurOrg -
    (load * bgElBlurOrg) / 100
  ).toFixed(2)}px)`;
};

let int = setInterval(blurring, 30);
