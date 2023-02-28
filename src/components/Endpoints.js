const endpoints = {
  popularRequest: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`,
  latestRequest: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_KEY}&language=en-US`,
  comingRequest: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_KEY}&language=en-US&page=1`,
  searchRequest: `https://imdb-api.com/en/API/SearchMovie/k_qjnv288f/`,
};

export default endpoints;
