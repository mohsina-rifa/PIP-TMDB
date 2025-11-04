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

const trailerItems: Movie[] = [
  {
    id: "trailer_1",
    title: "Trailer One",
    thumbnail: "./test_1.png",
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
    release_year: 2027,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "trailer_2",
    title: "Trailer Two",
    thumbnail: "./test_2.png",
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
    release_year: 2026,
    rating: 4.0,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "trailer_3",
    title: "Trailer Three",
    thumbnail: "./test_3.png",
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
    release_year: 2025,
    rating: 3.5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "trailer_4",
    title: "Trailer Four",
    thumbnail: "./test_4.png",
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
    release_year: 2024,
    rating: 4.0,
    genres: ["Drama", "Thriller"],
  },
  {
    id: "trailer_5",
    title: "Trailer Five",
    thumbnail: "./test_5.png",
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
    release_year: 2023,
    rating: 4.5,
    genres: ["Action", "Adventure"],
  },
];

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

const pickedItems: Movie[] = [
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
  const series = seriesStore.getUpcomingSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const tvItems: Movie[] = [
  {
    id: "tv_1",
    title: "TV One",
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
    release_year: 2020,
    rating: 5,
    genres: ["Action", "Adventure"],
  },
  {
    id: "tv_2",
    title: "TV Two",
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
    release_year: 2019,
    rating: 4.2,
    genres: ["Romance", "Adventure"],
  },
  {
    id: "tv_3",
    title: "TV Three",
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
    release_year: 2018,
    rating: 4.8,
    genres: ["Action", "Thriller"],
  },
  {
    id: "tv_4",
    title: "TV Four",
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
    release_year: 2017,
    rating: 4.3,
    genres: ["Romance", "Adventure"],
  },
  {
    id: "tv_5",
    title: "TV Five",
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
    release_year: 2016,
    rating: 4,
    genres: ["Action", "Romance"],
  },
  {
    id: "tv_6",
    title: "TV Six",
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
    release_year: 2015,
    rating: 4.2,
    genres: ["Romance", "Drama"],
  },
  {
    id: "tv_7",
    title: "TV Seven",
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
    release_year: 2014,
    rating: 4.7,
    genres: ["Drama", "Adventure"],
  },
  {
    id: "tv_8",
    title: "TV Eight",
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
    release_year: 2013,
    rating: 4.6,
    genres: ["Action", "Fantasy"],
  },
  {
    id: "tv_9",
    title: "TV Nine",
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
    release_year: 2012,
    rating: 4.5,
    genres: ["Action", "Drama"],
  },
  {
    id: "tv_10",
    title: "TV Ten",
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
    release_year: 2011,
    rating: 4.4,
    genres: ["Action", "Comedy"],
  },
];
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
      <Row :title="'Your Picks'" :items="pickedItems" />
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
