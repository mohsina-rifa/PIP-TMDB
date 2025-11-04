import type { Series } from "../../types/auth";

export interface SeriesState {
  series: Series[];
  trendingSeries: Series[];
  popularSeries: Series[];
  topRatedSeries: Series[];
  upcomingSeries: Series[];
  currentSeries: Series | null;
  loading: boolean;
  error: string | null;
}

export const state: SeriesState = {
  series: [],
  trendingSeries: [],
  popularSeries: [],
  topRatedSeries: [],
  upcomingSeries: [],
  currentSeries: null,
  loading: false,
  error: null,
};