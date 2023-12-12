import '../sass/main.scss';

const jokeEl = document.getElementById('joke');
const jokeBtnEl = document.getElementById('jokeBtn');

const getJoke = async function () {
  try {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json',
      },
    });

    if (!res.ok)
      throw new Error('there is some issue related 3rd party API request');

    const data = await res.json();

    jokeEl.textContent = data.joke;
  } catch (err) {
    alert(err.message);
  }
};
getJoke();

jokeBtnEl.addEventListener('click', getJoke);
