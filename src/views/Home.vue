<script setup lang="ts">
import { onMounted, computed } from "vue";
import Row from "../components/Row.vue";
import Trailer from "../components/Trailer.vue";
import type { Movie } from "../types/auth";
import { useMovieStore } from "../store/movie/movie.store";
import { useSeriesStore } from "../store/series/series.store";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const movieStore = useMovieStore();
const seriesStore = useSeriesStore();
const watchlistStore = useWatchlistStore();

onMounted(() => {
  movieStore.fetchUpcomingMovies();
  seriesStore.fetchUpcomingSeries();
  movieStore.fetchTopRatedMovies();
  seriesStore.fetchTopRatedSeries();
  movieStore.fetchPopularMovies();
  seriesStore.fetchPopularSeries();
  movieStore.fetchTrendingMovies();
  seriesStore.fetchTrendingSeries();
  watchlistStore.loadFromLocalStorage();
});

const trendingItems = computed(() => {
  const movies = movieStore.getTrendingMovies || [];
  const series = seriesStore.getTrendingSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const popularItems = computed(() => {
  const movies = movieStore.getPopularMovies || [];
  const series = seriesStore.getPopularSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const topRatedItems = computed(() => {
  const movies = movieStore.getTopRatedMovies || [];
  const series = seriesStore.getTopRatedSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const trailerItems = computed(() => {
  const items: Movie[] = [];

  if (topRatedItems.value.length > 0 && topRatedItems.value[0]) {
    items.push(topRatedItems.value[0]);
  }
  if (popularItems.value.length > 0 && popularItems.value[0]) {
    items.push(popularItems.value[0]);
  }
  if (trendingItems.value.length > 0 && trendingItems.value[0]) {
    items.push(trendingItems.value[0]);
  }

  return items;
});

const watchListItems = computed(() => {
  const movies = watchlistStore.getAllMovies || [];
  const series = watchlistStore.getAllSeries || [];
  
  const transformedSeries = series.map((s) => s.details);
  
  return [...movies, ...transformedSeries];
});

const movieItems = computed(() => {
  const movies = movieStore.getUpcomingMovies || [];

  return [...movies];
});

const tvItems = computed(() => {
  const series = seriesStore.getUpcomingSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...transformedSeries];
});
</script>

<template>
  <main class="home-container d-flex flex-column min-vh-100">
    <section class="trailer mb-4">
      <Trailer :items="trailerItems" />
    </section>

    <section class="px-5">
      <Row :title="'Trending Now'" :items="trendingItems" />
    </section>
    <section class="px-5">
      <Row :title="'Popular'" :items="popularItems" />
    </section>
    <section class="px-5">
      <Row :title="'Top Rated'" :items="topRatedItems" />
    </section>
    <section class="px-5">
      <Row :title="'Watchlist'" :items="watchListItems" />
    </section>
    <section class="px-5">
      <Row :title="'Upcoming Movies'" :items="movieItems" />
    </section>
    <section class="px-5">
      <Row :title="'Upcoming TV Series'" :items="tvItems" />
    </section>
  </main>
</template>

<style scoped>
.home-container {
  gap: 2.5rem;
}

.trailer {
  height: 43rem;
  background: linear-gradient(to right top, var(--black), var(--green-1));
}

h2 {
  color: var(--green-1);
}
</style>
