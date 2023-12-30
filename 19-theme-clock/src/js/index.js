import '../sass/main.scss';

const toggleBtn = document.querySelector('.toggle');
const clockEl = document.querySelector('.clock');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggleBtn.addEventListener('click', (e) => {
  const mode = e.target.textContent;

  if (mode === 'Dark Mode') {
    e.target.textContent = 'Light Mode';

    document.documentElement.style.setProperty('--primary-color', '#eee');
    document.documentElement.style.setProperty('--secondary-color', '#111');
  }

  if (mode === 'Light Mode') {
    e.target.textContent = 'Dark Mode';

    document.documentElement.style.setProperty('--primary-color', '#111');
    document.documentElement.style.setProperty('--secondary-color', '#eee');
  }
});

const setClock = function () {
  const date = new Date();

  const hrDeg =
    (360 / 12) *
    (date.getHours() > 12 ? date.getHours() - 12 : date.getHours());
  const minDeg = (360 / 60) * date.getMinutes();
  const secDeg = (360 / 60) * date.getSeconds();

  clockEl.style.setProperty('--rotate-hr', `${hrDeg}deg`);
  clockEl.style.setProperty('--rotate-min', `${minDeg}deg`);
  clockEl.style.setProperty('--rotate-sec', `${secDeg}deg`);

  timeEl.textContent = `${date.getHours()}:${date.getMinutes()}`;
  dateEl.firstElementChild.textContent = `${days[date.getDay()]}, ${
    months[date.getMonth()]
  }`;
  dateEl.children[1].textContent = `${date.getDate()}`;
};
setClock();

setInterval(setClock, 1000);
