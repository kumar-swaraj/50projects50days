import '../sass/main.scss';

const boxElsList = document.querySelectorAll('.box');

const checkBoxes = function () {
  const triggerBottom = window.innerHeight * 0.8;

  boxElsList.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
};
checkBoxes();

window.addEventListener('scroll', checkBoxes);
