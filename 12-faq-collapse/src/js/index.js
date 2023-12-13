import '../sass/main.scss';

const faqContainerEl = document.querySelector('.faq-container');

faqContainerEl.addEventListener('click', function (e) {
  const faqToggleBtnEl = e.target.closest('.faq__toggle');
  if (!faqToggleBtnEl) return;

  faqToggleBtnEl.closest('.faq').classList.toggle('active');
});
