const addMovieBtn = document.querySelector("#add-movie-btn");
const searchMovieBtn = document.querySelector("#search-btn");

const movies = [];

const clearForm = () => {
	document.querySelector("#title").value = '';
	document.querySelector("#extra-name").value = '';
	document.querySelector("#extra-value").value = '';
}

const addMoviehandler = () => {
  let title = document.querySelector("#title").value;
  let extraName = document.querySelector("#extra-name").value;
  let extraValue = document.querySelector("#extra-value").value;

  if (!title.trim() || !extraName.trim() || !extraValue.trim()) {
    return;
  }

  const movie = {
    title,
    id: Math.random(),
    [extraName]: extraValue,
  };
	movies.push(movie);
	clearForm();
};

addMovieBtn.addEventListener("click", addMoviehandler);
