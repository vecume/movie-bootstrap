const elMovieList = document.querySelector(".js-movie-list");


elMovieList.addEventListener("click", async (evt) => {
  if(evt.target.matches(".js-movie-show")) {
    const movieId = evt.target.dataset.movieId;
    const movie = await fetchJSON(api(`movie/${movieId}`));
    generateMovieDetails(movie)
  }
})

fetchJSON(api("movie/popular")).then(data => {
  let html = "";
  data.results.forEach(movie => {
    html += generateMovieCard(movie);
  })

  elMovieList.innerHTML = html;
})
