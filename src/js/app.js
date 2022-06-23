import 'modern-normalize';
import { fetchMovies, resetPage } from './fetchMovies';
import { createMovieCards } from './createMovieCards';

const form = document.querySelector('.searchbox');
const moviesContainer = document.querySelector('.movies');
const loadMoreBtn = document.querySelector('.load-more');
let movieName = '';

form.addEventListener('submit', event => {
  event.preventDefault();
  movieName = form.elements.query.value;
  if (movieName === '') {
    return alert('А давай не искать пустую строку ок да?');
  }
  resetPage();
  loadMoreBtn.classList.remove('is-visible');
  fetchMovies(movieName).then(({ movies }) => {
    moviesContainer.innerHTML = createMovieCards(movies);
    loadMoreBtn.classList.add('is-visible');
  });
});

loadMoreBtn.addEventListener('click', () => {
  fetchMovies(movieName).then(({ movies, isLastPage }) => {
    moviesContainer.insertAdjacentHTML('beforeend', createMovieCards(movies));
    if (isLastPage) {
      loadMoreBtn.classList.remove('is-visible');
    }
  });
});
