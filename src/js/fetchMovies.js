const DEFAULT_PAGE = 1;
let page = DEFAULT_PAGE;

export const resetPage = () => {
  page = DEFAULT_PAGE;
};

export const fetchMovies = movieName => {
  const searchParams = new URLSearchParams({
    api_key: 'ff9bbd2cbbe435339b9b0aca1c6caa94',
    language: 'en-US',
    page,
    include_adult: false,
    query: movieName,
  });

  return fetch(`https://api.themoviedb.org/3/search/movie?${searchParams}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.statusText);
    })
    .then(data => {
      page += 1;
      return {
        movies: data.results,
        isLastPage: page === data.total_pages,
      };
    });
};
