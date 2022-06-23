export const createMovieCards = movies => {
  return movies
    .map(({ poster_path, title, overview }) => {
      const imgUrl = poster_path
        ? `https://image.tmdb.org/t/p/w500${poster_path}`
        : 'https://via.placeholder.com/280x420';

      return `<div>
        <img src="${imgUrl}" alt="${title}" />
        <h2>${title}</h2>
        <p>${overview.slice(0, 200)}</p>
      </div>`;
    })
    .join('');
};
// https://via.placeholder.com/150
