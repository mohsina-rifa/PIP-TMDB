import type { SeriesState } from "./series.state";

export const getters = {
  getAllSeries: (state: SeriesState) => state.series,
  
  getTrendingSeries: (state: SeriesState) => state.trendingSeries,
  
  getPopularSeries: (state: SeriesState) => state.popularSeries,
  
  getTopRatedSeries: (state: SeriesState) => state.topRatedSeries,
  
  getUpcomingSeries: (state: SeriesState) => state.upcomingSeries,
  
  getCurrentSeries: (state: SeriesState) => state.currentSeries,
  
  isLoading: (state: SeriesState) => state.loading,
  
  getError: (state: SeriesState) => state.error,
  
  getSeriesById: (state: SeriesState) => (id: string) => {
    return state.series.find((series) => series.details.id === id);
  },
};