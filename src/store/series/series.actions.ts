import axios from "../../service/api";
import type { SeriesState } from "./series.state";

export const actions = {
  async fetchTrendingSeries(this: SeriesState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/trending/tv/week");
      this.trendingSeries = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch trending series";
      console.error("Error fetching trending series:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchPopularSeries(this: SeriesState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/tv/popular");
      this.popularSeries = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch popular series";
      console.error("Error fetching popular series:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchTopRatedSeries(this: SeriesState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/tv/top_rated");
      this.topRatedSeries = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch top rated series";
      console.error("Error fetching top rated series:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchUpcomingSeries(this: SeriesState) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/tv/on_the_air");
      this.upcomingSeries = response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch upcoming series";
      console.error("Error fetching upcoming series:", error);
    } finally {
      this.loading = false;
    }
  },

  async fetchSeriesById(this: SeriesState, id: number) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get(`/tv/${id}`);
      this.currentSeries = response.data;
      return response.data;
    } catch (error: any) {
      this.error = error.message || "Failed to fetch series details";
      console.error("Error fetching series details:", error);
      throw error;
    } finally {
      this.loading = false;
    }
  },

  async searchSeries(this: SeriesState, query: string) {
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get("/search/tv", {
        params: { query },
      });
      this.series = response.data.results;
      return response.data.results;
    } catch (error: any) {
      this.error = error.message || "Failed to search series";
      console.error("Error searching series:", error);
      throw error;
    } finally {
      this.loading = false;
    }
  },

  clearCurrentSeries(this: SeriesState) {
    this.currentSeries = null;
  },

  clearError(this: SeriesState) {
    this.error = null;
  },
};
