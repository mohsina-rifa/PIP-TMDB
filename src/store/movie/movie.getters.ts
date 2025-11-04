import type { MovieState } from "./movie.state";

export const getters = {
  getAllMovies: (state: MovieState) => state.movies,

  getTrendingMovies: (state: MovieState) => state.trendingMovies,

  getPopularMovies: (state: MovieState) => state.popularMovies,

  getTopRatedMovies: (state: MovieState) => state.topRatedMovies,

  getUpcomingMovies: (state: MovieState) => state.upcomingMovies,

  getCurrentMovie: (state: MovieState) => state.currentMovie,

  isLoading: (state: MovieState) => state.loading,

  getError: (state: MovieState) => state.error,

  getMovieById: (state: MovieState) => (id: string) => {
    return state.movies.find((movie) => movie.id === id);
  },
};
