import '../sass/main.scss';

const containerEl = document.querySelector('.container');

containerEl.addEventListener('click', function (e) {
  const activatedPanelEl = e.target.closest('.panel');
  if (!activatedPanelEl) return;

  const previousActivePanelEl = this.querySelector('.panel.active');

  previousActivePanelEl.classList.remove('active');
  activatedPanelEl.classList.add('active');
});
