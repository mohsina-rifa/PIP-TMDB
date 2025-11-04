import axios from "../../service/api";
import type { MovieState } from "./movie.state";
import type { Movie } from "../../types/auth";

const transformToMovie = (apiData: any): Movie => {
  return {
    id: apiData.id.toString(),
    title: apiData.title || apiData.original_title,
    thumbnail: apiData.poster_path
      ? `https://image.tmdb.org/t/p/w500${apiData.poster_path}`
      : "",
    description: apiData.overview || "",
    cast: [],
    release_year: apiData.release_date
      ? new Date(apiData.release_date).getFullYear()
      : 0,
    rating: apiData.vote_average || 0,
    genres: apiData.genre_ids || [],
    duration: apiData.runtime || 0,
    mediaType: "movie" as const,
  };
};

export const actions = {
  async fetchTrendingMovies(this: MovieState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/trending/movie/week");
      this.trendingMovies = response.data.results.map(transformToMovie);
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
      this.popularMovies = response.data.results.map(transformToMovie);
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
      this.topRatedMovies = response.data.results.map(transformToMovie);
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
      this.upcomingMovies = response.data.results.map(transformToMovie);
    } catch (error: any) {
      this.error = error.message || "Failed to fetch upcoming movies";
      console.error("Error fetching upcoming movies:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchByCategory(this: MovieState, category: string) {
    const methodMap: Record<string, (ctx: MovieState) => Promise<void>> = {
      "trending-now": (ctx) => actions.fetchTrendingMovies.call(ctx),
      popular: (ctx) => actions.fetchPopularMovies.call(ctx),
      "top-rated": (ctx) => actions.fetchTopRatedMovies.call(ctx),
      "upcoming-tv-series": (ctx) => actions.fetchUpcomingMovies.call(ctx),
    };

    const fetchMethod = methodMap[category];
    if (fetchMethod) {
      await fetchMethod(this);
    } else {
      console.error(`No fetch method found for category: ${category}`);
    }
  },

  async fetchMovieById(this: MovieState, id: string) {
    this.loading = true;
    this.error = null;
    try {
      const [detailsResponse, creditsResponse] = await Promise.all([
        axios.get(`/movie/${id}`),
        axios.get(`/movie/${id}/credits`),
      ]);

      const movieData = detailsResponse.data;
      const credits = creditsResponse.data;

      const cast =
        credits.cast?.slice(0, 10).map((actor: any) => ({
          name: actor.name,
          role: actor.character,
          gender: actor.gender === 1 ? "female" : "male",
          image: actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : "",
        })) || [];

      const genres = movieData.genres?.map((g: any) => g.name) || [];

      this.currentMovie = {
        id: movieData.id.toString(),
        title: movieData.title || movieData.original_title,
        thumbnail: movieData.backdrop_path
          ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`
          : movieData.poster_path
          ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
          : "",
        description: movieData.overview || "",
        cast: cast,
        release_year: movieData.release_date
          ? new Date(movieData.release_date).getFullYear()
          : 0,
        rating: movieData.vote_average || 0,
        genres: genres,
        duration: movieData.runtime || 0,
        mediaType: "movie" as const,
      };

      return this.currentMovie;
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
