<script setup lang="ts">
import { onMounted, computed } from "vue";
import Row from "../components/Row.vue";
import Trailer from "../components/Trailer.vue";
import type { Movie } from "../types/auth";
import { useMovieStore } from "../store/movie/movie.store";
import { useSeriesStore } from "../store/series/series.store";

const movieStore = useMovieStore();
const seriesStore = useSeriesStore();

onMounted(() => {
  movieStore.fetchUpcomingMovies();
  seriesStore.fetchUpcomingSeries();
  movieStore.fetchTopRatedMovies();
  seriesStore.fetchTopRatedSeries();
  movieStore.fetchPopularMovies();
  seriesStore.fetchPopularSeries();
  movieStore.fetchTrendingMovies();
  seriesStore.fetchTrendingSeries();
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

const watchListItems: Movie[] = [
  {
    id: "picked_1",
    title: "Picked One",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2025,
    rating: 4.4,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "picked_2",
    title: "Picked Two",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2024,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "picked_3",
    title: "Picked Three",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2023,
    rating: 4.7,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "picked_4",
    title: "Picked Four",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2022,
    rating: 4.6,
    genres: ["Action", "Adventure"],
  },
  {
    id: "picked_5",
    title: "Picked Five",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2022,
    rating: 4.6,
    genres: ["Action", "Adventure"],
  },
  {
    id: "picked_6",
    title: "Picked Six",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2021,
    rating: 4.8,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "picked_7",
    title: "Picked Seven",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2020,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "picked_8",
    title: "Picked Eight",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2020,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "picked_9",
    title: "Picked Nine",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2021,
    rating: 4.7,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "picked_10",
    title: "Picked Ten",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2020,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
];

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
