const API_KEY = "cc390de7fba1dc68ee6c3e5d73c22371";
const BASE_URL = "https://api.themoviedb.org/3/"
const POSTER_IMG_URL = "https://image.tmdb.org/t/p/w500"


function api(params) {
  const hasQMark = params.includes("?")
  return `${BASE_URL}${params}${hasQMark ? "&" : "?"}api_key=${API_KEY}`
}

function fetchJSON(url, init) {
  return fetch(url, init).then(res => res.json()).then(json => json);
}

function getImage(posterPath) {
  return posterPath ? `${POSTER_IMG_URL}${posterPath}` : `https://via.placeholder.com/500x750`;
}

function generateMovieCard(movie) {
  return `
<div class="col-lg-3 col-md-4 col-sm-6 movie-card my-2">
  <div class="card">
  <img loading="lazy" src="${getImage(movie.poster_path)}">
  <div class="card-body">
    <h5 title="${movie.title}" class="card-title" title=>${movie.title}</h5>
    <p title="${movie.overview}" class="card-text truncate">${movie.overview}</p>
    <button data-bs-toggle="modal" data-bs-target="#movie-list" data-movie-id="${movie.id}" href="#" class="btn btn-primary d-block w-100 js-movie-show">Show more</button>
  </div>
  </div>
</div>

  `
}

function generateMovieDetails(movie) {
  const modal = document.querySelector("#movie-list");

  modal.querySelector("#movie-list-label").textContent = movie.title
}