import { defineStore } from "pinia";
import { state } from "./watchlist.state";
import { getters } from "./watchlist.getters";
import { actions } from "./watchlist.actions";

export const useWatchlistStore = defineStore("watchlist", {
  state: () => ({ ...state }),
  getters,
  actions,
});