import type { Movie, Series } from "../../types/auth";
import type { WatchlistState } from "./watchlist.state";

export const actions = {
  addMovie(this: WatchlistState, movie: Movie) {
    if (!this.movies.find((m) => m.id === movie.id)) {
      this.movies.push(movie);
      // Save directly
      localStorage.setItem(
        "tmdb_watchlist",
        JSON.stringify({
          movies: this.movies,
          series: this.series,
        })
      );
    }
  },

  removeMovie(this: WatchlistState, id: string) {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    // Save directly
    localStorage.setItem(
      "tmdb_watchlist",
      JSON.stringify({
        movies: this.movies,
        series: this.series,
      })
    );
  },

  addSeries(this: WatchlistState, series: Series) {
    if (!this.series.find((s) => s.details.id === series.details.id)) {
      this.series.push(series);
      // Save directly
      localStorage.setItem(
        "tmdb_watchlist",
        JSON.stringify({
          movies: this.movies,
          series: this.series,
        })
      );
    }
  },

  removeSeries(this: WatchlistState, id: string) {
    this.series = this.series.filter((series) => series.details.id !== id);
    // Save directly
    localStorage.setItem(
      "tmdb_watchlist",
      JSON.stringify({
        movies: this.movies,
        series: this.series,
      })
    );
  },

  toggleMovie(this: WatchlistState, movie: Movie) {
    const exists = this.movies.find((m) => m.id === movie.id);
    if (exists) {
      this.movies = this.movies.filter((m) => m.id !== movie.id);
    } else {
      this.movies.push(movie);
    }
    // Save directly
    localStorage.setItem(
      "tmdb_watchlist",
      JSON.stringify({
        movies: this.movies,
        series: this.series,
      })
    );
  },

  toggleSeries(this: WatchlistState, series: Series) {
    const exists = this.series.find((s) => s.details.id === series.details.id);
    if (exists) {
      this.series = this.series.filter((s) => s.details.id !== series.details.id);
    } else {
      this.series.push(series);
    }
    // Save directly
    localStorage.setItem(
      "tmdb_watchlist",
      JSON.stringify({
        movies: this.movies,
        series: this.series,
      })
    );
  },

  clearAll(this: WatchlistState) {
    this.movies = [];
    this.series = [];
    localStorage.setItem(
      "tmdb_watchlist",
      JSON.stringify({
        movies: this.movies,
        series: this.series,
      })
    );
  },

  loadFromLocalStorage(this: WatchlistState) {
    const data = localStorage.getItem("tmdb_watchlist");
    if (data) {
      try {
        const parsed = JSON.parse(data);
        this.movies = parsed.movies || [];
        this.series = parsed.series || [];
      } catch (error) {
        console.error("Failed to load watchlist from localStorage:", error);
      }
    }
  },
};