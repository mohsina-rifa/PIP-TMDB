import type { WatchlistState } from "./watchlist.state";

export const getters = {
  getAllMovies: (state: WatchlistState) => state.movies,

  getAllSeries: (state: WatchlistState) => state.series,

  getMovieById: (state: WatchlistState) => (id: string) => {
    return state.movies.find((movie) => movie.id === id);
  },

  getSeriesById: (state: WatchlistState) => (id: string) => {
    return state.series.find((series) => series.details.id === id);
  },

  isMovieInWatchlist: (state: WatchlistState) => (id: string) => {
    return state.movies.some((movie) => movie.id === id);
  },

  isSeriesInWatchlist: (state: WatchlistState) => (id: string) => {
    return state.series.some((series) => series.details.id === id);
  },

  getTotalCount: (state: WatchlistState) => {
    return state.movies.length + state.series.length;
  },
};
