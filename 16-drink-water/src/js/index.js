import '../sass/main.scss';

const smallCupsElList = document.querySelectorAll('.cup--sm');
const litersEl = document.getElementById('liters');
const remainedEl = document.getElementById('remained');
const percentageEl = document.getElementById('percentage');

const updateBigCup = function () {
  const fullSmCups = document.querySelectorAll('.cup--sm.full').length;
  const totalCups = smallCupsElList.length;

  if (fullSmCups === 0) {
    percentageEl.style.visibility = 'hidden';
    percentageEl.style.height = 0;
  } else {
    percentageEl.style.visibility = 'visible';
    percentageEl.style.height = `${((fullSmCups / totalCups) * 100).toFixed(
      2
    )}%`;
    percentageEl.textContent = `${((fullSmCups / totalCups) * 100).toFixed(
      1
    )}%`;
  }

  if (fullSmCups === totalCups) {
    remainedEl.style.visibility = 'hidden';
    if (fullSmCups !== 0) remainedEl.style.height = 0;
  } else {
    remainedEl.style.visibility = 'visible';
    remainedEl.style.removeProperty('height');
    litersEl.textContent = `${2 - (250 * fullSmCups) / 1000}L`;
  }
};
updateBigCup();

const hightlightCup = function () {
  if (
    smallCupsElList[this].classList.contains('full') &&
    !smallCupsElList[this + 1]?.classList.contains('full')
  ) {
    smallCupsElList[this].classList.remove('full');
    updateBigCup();
    return;
  }

  smallCupsElList.forEach((smCupEL, idx) => {
    if (idx <= this) {
      smCupEL.classList.add('full');
    } else {
      smCupEL.classList.remove('full');
    }
  });

  updateBigCup();
};

smallCupsElList.forEach((smCupEL, idx) => {
  smCupEL.addEventListener('click', hightlightCup.bind(idx));
});
