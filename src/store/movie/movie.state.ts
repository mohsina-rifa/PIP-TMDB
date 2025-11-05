import type { GenreMapping } from "../../service/filter";
import type { Movie } from "../../types/auth";

export interface MovieState {
  movies: Movie[];
  trendingMovies: Movie[];
  popularMovies: Movie[];
  topRatedMovies: Movie[];
  upcomingMovies: Movie[];
  currentMovie: Movie | null;
  loading: boolean;
  error: string | null;
  genreMappings: GenreMapping;
}

export const state: MovieState = {
  movies: [],
  trendingMovies: [],
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  currentMovie: null,
  loading: false,
  error: null,
  genreMappings: { movieGenres: {}, tvGenres: {} },
};