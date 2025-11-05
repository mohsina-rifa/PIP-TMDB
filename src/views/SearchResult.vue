<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import type { Movie } from "../types/auth";
import AllFiles from "../components/AllFiles.vue";
import { useRoute } from "vue-router";
import { useMovieStore } from "../store/movie/movie.store";
import { useSeriesStore } from "../store/series/series.store";

const route = useRoute();
const movieStore = useMovieStore();
const seriesStore = useSeriesStore();

const isLoading = ref(false);
const searchResults = ref<Movie[]>([]);

const reverseKebab = (str: string): string => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const searchTerm = computed(() => reverseKebab(route.params.query as string));

const performSearch = async (query: string) => {
  isLoading.value = true;
  try {
    const [movieResults, seriesResults] = await Promise.all([
      movieStore.searchMovies(query),
      seriesStore.searchSeries(query),
    ]);

    const transformedMovies = movieResults.map((movie: any) => ({
      id: movie.id.toString(),
      title: movie.title || movie.original_title,
      thumbnail: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/thumbnail.png",
      description: movie.overview || "",
      cast: [],
      release_year: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 0,
      rating: movie.vote_average || 0,
      genres: movie.genre_ids || [],
      duration: movie.runtime || 0,
      mediaType: "movie" as const,
    }));

    const transformedSeries = seriesResults.map((series: any) => ({
      id: series.id.toString(),
      title: series.name || series.original_name,
      thumbnail: series.poster_path
        ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
        : "/thumbnail.png",
      description: series.overview || "",
      cast: [],
      release_year: series.first_air_date
        ? new Date(series.first_air_date).getFullYear()
        : 0,
      rating: series.vote_average || 0,
      genres: series.genre_ids || [],
      mediaType: "tv" as const,
    }));

    searchResults.value = [...transformedMovies, ...transformedSeries];
  } catch (error) {
    console.error("Error performing search:", error);
    searchResults.value = [];
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  performSearch(searchTerm.value);
});

watch(
  () => route.params.query,
  (newQuery) => {
    if (newQuery) {
      const query = reverseKebab(newQuery as string);
      performSearch(query);
    }
  }
);

const results = computed(() => searchResults.value);
</script>

<template>
  <section class="min-vh-100 px-5 py-4">
    <h1
      class="search-header d-flex mb-5 mt-3 mx-2 justify-content-start align-items-center fw-bolder"
    >
      Results for "{{ searchTerm }}"
    </h1>
    <div
      v-if="isLoading"
      class="min-vh-50 d-flex justify-content-center align-items-center py-5"
    >
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <AllFiles v-else-if="results.length > 0" :items="results" />
    <div v-else class="mt-3 text-center py-5">
      <i class="bi bi-search display-1 text-muted"></i>
      <p class="text-muted mt-3 fs-5">
        No results found for "{{ searchTerm }}". Try a different search term.
      </p>
    </div>
  </section>
</template>

<style scoped>
.search-header {
  color: var(--green-1);
  font-size: 3.25rem;
}
</style>
