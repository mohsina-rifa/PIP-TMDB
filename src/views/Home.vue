<script setup lang="ts">
import Row from "../components/Row.vue";
import Trailer from "../components/Trailer.vue";
import type { Show } from "../types/auth";

const trailerItems: Show[] = [
  {
    title: "Trailer One",
    thumbnail: "./test_1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trailer Two",
    thumbnail: "./test_2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trailer Three",
    thumbnail: "./test_3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Trailer Four",
    thumbnail: "./test_4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Trailer Five",
    thumbnail: "./test_5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const trendingItems: Show[] = [
  {
    title: "Trending One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Trending Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Trending Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Trending Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Trending Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const popularItems: Show[] = [
  {
    title: "Popular One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Popular Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Popular Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Popular Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Popular Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const topRatedItems: Show[] = [
  {
    title: "Top Rated One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Top Rated Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Top Rated Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Top Rated Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Top Rated Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const pickedItems: Show[] = [
  {
    title: "Picked One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Picked Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Picked Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Picked Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Picked Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const movieItems: Show[] = [
  {
    title: "Movie One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Movie Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Movie Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Movie Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Movie Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const tvItems: Show[] = [
  {
    title: "TV One",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Two",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Three",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Four",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Five",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Six",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "TV Seven",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "TV Eight",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "TV Nine",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "TV Ten",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
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
