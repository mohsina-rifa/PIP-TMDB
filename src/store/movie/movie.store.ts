import { defineStore } from "pinia";
import { state } from "./movie.state";
import { getters } from "./movie.getters";
import { actions } from "./movie.actions";

export const useMovieStore = defineStore("movie", {
  state: () => ({ ...state }),
  getters,
  actions,
});