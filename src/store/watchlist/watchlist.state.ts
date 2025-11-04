import type { Movie, Series } from "../../types/auth";

export interface WatchlistState {
  movies: Movie[];
  series: Series[];
}

export const state: WatchlistState = {
  movies: [],
  series: [],
};