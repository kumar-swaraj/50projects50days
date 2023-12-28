import '../sass/main.scss';

import { API_URL, IMG_URL } from './config';

const formEl = document.getElementById('form');
const searchInputEl = document.getElementById('search');
const mainEl = document.getElementById('main');

const getMovies = async function (apiUrl, query, page = 1, search = false) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYjEzNDBjMGUzMTJiN2JjZTQyMTE0OTQ3YWZhMjViMiIsInN1YiI6IjY1OGM4ZjhjMzIzZWJhMGY2ODM2NjkzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cF1VMwn8_U4Ln2taoalumGQ6g4BaUsuKqayeSj4WiLQ',
    },
  };

  try {
    if (search) {
      // MOVIE SEARCH
      const url = `${apiUrl}search/movie?query=${query}`;

      var res = await fetch(url, options);
    } else {
      // MOVIES COLLECTION
      const url = `${apiUrl}discover/movie?sort_by=popularity.desc&page=${page}`;

      var res = await fetch(url, options);
    }

    if (!res.ok)
      throw new Error(`status: ${res.status} || Something went wrong`);

    const data = await res.json();
    return data.results;
  } catch (err) {
    throw err;
  }
};

const movieDom = function ({ poster_path, title, vote_average, overview }) {
  return `
  <figure class="movie">
    <img
      src="${IMG_URL}${poster_path}"
      alt="${title}"
      class="movie__img"
    />
    <div class="movie__overlay">
      <figcaption class="movie__info">
        <h3 class="movie__title">${title}</h3>
        <span class="movie__rating movie__rating--${
          vote_average > 7 ? 'green' : vote_average > 4 ? 'yellow' : 'red'
        }">${vote_average}</span>
      </figcaption>

      <div class="movie__overview">
        <h3>Overview</h3>

        <span>
        ${overview}
        </span>
      </div>
    </div>
  </figure>
  `;
};

const showMovies = async function (page, searchQuery, search = false) {
  let data;

  try {
    if (!search) {
      data = await getMovies(API_URL, undefined, page, search);
    } else {
      data = await getMovies(API_URL, searchQuery, page, search);
    }
  } catch (err) {
    const divEl = document.createElement('div');
    divEl.classList.add('error');
    divEl.textContent = 'data not found';

    mainEl.innerHTML = '';
    mainEl.append(divEl);

    console.error(err);

    return;
  }

  if (data && data.length === 0) return;

  mainEl.innerHTML = '';

  data.forEach((movieEntry) => {
    mainEl.insertAdjacentHTML('beforeend', movieDom(movieEntry));
  });
};
showMovies(1);

const handleSearch = function (e) {
  e.preventDefault();

  const searchQuery = searchInputEl.value.trim();
  searchInputEl.value = '';

  if (searchQuery === '') return;

  showMovies(1, searchQuery, true);
};
formEl.addEventListener('submit', handleSearch);
