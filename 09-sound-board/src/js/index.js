import '../sass/main.scss';
import '../sounds/applause.mp3';
import '../sounds/boo.mp3';
import '../sounds/gasp.mp3';
import '../sounds/tada.mp3';
import '../sounds/victory.mp3';
import '../sounds/wrong.mp3';

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttonsEl = document.getElementById('buttons');

const stopSounds = function () {
  sounds.forEach((sound) => {
    const soundEl = document.getElementById(sound);
    soundEl.pause();
    soundEl.currentTime = 0;
  });
};

sounds.forEach((sound) => {
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  btnEl.textContent = sound;

  buttonsEl.append(btnEl);
});

buttonsEl.addEventListener('click', function (e) {
  const btn = e.target.closest('.btn');

  if (!btn) return;

  stopSounds();

  document.getElementById(btn.textContent).play();
});
