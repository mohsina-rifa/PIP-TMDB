import axios from "../../service/api";
import type { MovieState } from "./movie.state";

export const actions = {
  async fetchTrendingMovies(this: MovieState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/trending/movie/week");
      this.trendingMovies = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch trending movies";
      console.error("Error fetching trending movies:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchPopularMovies(this: MovieState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/movie/popular");
      this.popularMovies = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch popular movies";
      console.error("Error fetching popular movies:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchTopRatedMovies(this: MovieState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/movie/top_rated");
      this.topRatedMovies = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch top rated movies";
      console.error("Error fetching top rated movies:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchUpcomingMovies(this: MovieState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/movie/upcoming");
      this.upcomingMovies = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch upcoming movies";
      console.error("Error fetching upcoming movies:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchMovieById(this: MovieState, id: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(`/movie/${id}`);
      this.currentMovie = response.data;
      return response.data;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch movie details";
      console.error("Error fetching movie details:", error);
      throw error;
    } finally {
      this.loading = false;
    }
  },

  async searchMovies(this: MovieState, query: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/search/movie", {
        params: { query },
      });
      this.movies = response.data.results;
      return response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to search movies";
      console.error("Error searching movies:", error);
      throw error;
    } finally {
      this.loading = false;
    }
  },

  clearCurrentMovie(this: MovieState) {
    this.currentMovie = null;
  },

  clearError(this: MovieState) {
    this.error = null;
  },
};
