import '../sass/main.scss';

const labelElsList = document.querySelectorAll('.form-control label');

labelElsList.forEach((label) => {
  label.innerHTML = label.textContent
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    )
    .join('');
});
