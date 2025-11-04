import axios from "../../service/api";
import type { SeriesState } from "./series.state";
import type { Series } from "../../types/auth";

const transformToSeries = (apiData: any): Series => {
  return {
    details: {
      id: apiData.id.toString(),
      title: apiData.name || apiData.original_name,
      thumbnail: apiData.poster_path
        ? `https://image.tmdb.org/t/p/w500${apiData.poster_path}`
        : "",
      description: apiData.overview || "",
      cast: [],
      release_year: apiData.first_air_date
        ? new Date(apiData.first_air_date).getFullYear()
        : 0,
      rating: apiData.vote_average || 0,
      genres: apiData.genre_ids || [],
      mediaType: 'tv' as const,
    },
    total_seasons: apiData.number_of_seasons || 0,
    seasons: [],
  };
};

export const actions = {
  async fetchTrendingSeries(this: SeriesState) {
    this.loading = true;
    this.error = null;
    try {
      const [popularResponse, topRatedResponse] = await Promise.all([
        axios.get("/tv/popular"),
        axios.get("/tv/top_rated"),
      ]);

      const popularSeries = popularResponse.data.results;
      const topRatedSeries = topRatedResponse.data.results;

      const commonSeries = popularSeries.filter((popular: any) =>
        topRatedSeries.some((topRated: any) => topRated.id === popular.id)
      );

      this.trendingSeries = commonSeries.map(transformToSeries);
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
      this.popularSeries = response.data.results.map(transformToSeries);
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
      this.topRatedSeries = response.data.results.map(transformToSeries);
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
      const response = await axios.get("/tv/airing_today");
      this.upcomingSeries = response.data.results.map(transformToSeries);
    } catch (error: any) {
      this.error = error.message || "Failed to fetch upcoming series";
      console.error("Error fetching upcoming series:", error);
    } finally {
      this.loading = false;
    }
  },
  
  async fetchByCategory(this: SeriesState, category: string) {
    const methodMap: Record<string, (ctx: SeriesState) => Promise<void>> = {
      "trending-now": (ctx) => actions.fetchTrendingSeries.call(ctx),
      "popular": (ctx) => actions.fetchPopularSeries.call(ctx),
      "top-rated": (ctx) => actions.fetchTopRatedSeries.call(ctx),
      "upcoming-tv-series": (ctx) => actions.fetchUpcomingSeries.call(ctx),
    };

    const fetchMethod = methodMap[category];
    if (fetchMethod) {
      await fetchMethod(this);
    } else {
      console.error(`No fetch method found for category: ${category}`);
    }
  },

  async fetchSeriesById(this: SeriesState, id: string) {
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
