import { defineStore } from "pinia";
import { state } from "./series.state";
import { getters } from "./series.getters";
import { actions } from "./series.actions";

export const useSeriesStore = defineStore("series", {
  state: () => ({ ...state }),
  getters,
  actions,
});