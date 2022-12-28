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
  if (movies.length === 0) {
    moviesList.classList.remove("visible");
  } else {
    moviesList.classList.add("visible");
  }
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
    info: {
      title: title.value,
      [extraName.value]: extraValue.value,
    },
    id: Math.random().toFixed(5),
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
      let elementText = `${movie.info.title} - `;
      for (const key in movie.info) {
        if (key !== "title") {
          elementText += `${key}: ${movie.info[key]}`;
        }
      }
      li.textContent = elementText;

      moviesList.appendChild(li);
    });
  }
};

const searchMovieHander = () => {
  const filterField = document.querySelector("#filter-title").value;
  const searchValue = filterField ? filterField.trim().toLowerCase() : "";

  const modifiedArr = movies.filter((el) => {
    return el.info.title.trim().toLowerCase().includes(searchValue);
  });

  modifiedMovies = [...modifiedArr];
  renderMoviesList();
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHander);
