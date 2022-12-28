const addMovieBtn = document.querySelector("#add-movie-btn");
const searchMovieBtn = document.querySelector("#search-btn");
const moviesList = document.querySelector("#movie-list");

const title = document.querySelector("#title");
const extraName = document.querySelector("#extra-name");
const extraValue = document.querySelector("#extra-value");

const movies = [];
let modifiedMovies = [];

const clearForm = () => {
  title.value = "";
  extraName.value = "";
  extraValue.value = "";
};

const updateUI = () => {
  moviesList.style.display = modifiedMovies.length > 0 ? "block" : "none";
};

const addMovieHandler = () => {
  if (
    !title.value.trim() ||
    !extraName.value.trim() ||
    !extraValue.value.trim()
  ) {
    return;
  }

  const movie = {
    title: title.value,
    id: Math.random().toFixed(5),
    [extraName.value]: extraValue.value,
  };

  movies.push(movie);
  modifiedMovies = [...movies];

  renderMoviesList();
  clearForm();
};

const renderMoviesList = () => {
  moviesList.innerHTML = "";
  updateUI();
  if (modifiedMovies.length > 0) {
    modifiedMovies.forEach((movie) => {
      const li = document.createElement("li");
      li.innerText = `${movie.id} ${movie.title}`;

      moviesList.appendChild(li);
    });
  }
};

const searchHander = () => {
  const filterField = document.querySelector("#filter-title").value;
  const searchValue = filterField ? filterField.trim().toLowerCase() : "";

  const modifiedArr = [];

  movies.forEach((el) => {
    if (el.title.trim().toLowerCase().includes(searchValue)) {
      modifiedArr.push(el);
    }
  });

  modifiedMovies = [...modifiedArr];
  renderMoviesList();
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchHander);
