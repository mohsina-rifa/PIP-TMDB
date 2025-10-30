<script setup lang="ts">
import Row from "../components/Row.vue";
import type { Show } from "../types/auth";

const trendingItems: Show[] = [
  {
    title: "Stranger Things",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Wednesday",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Riverdale",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Young Sheldon",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Breaking Bad",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Crown",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Titans",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
  {
    title: "Flash",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
  {
    title: "Supergirl",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
  {
    title: "Arrow",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
];

const topItems: Show[] = [
  {
    title: "Stranger Things",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Wednesday",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Titans",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
  {
    title: "Flash",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
  {
    title: "Arrow",
    thumbnail: "./thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   ",
  },
];
</script>

<template>
  <main class="home-container d-flex flex-column min-vh-100">
    <section class="trailer mb-4"></section>

    <section class="px-5">
      <Row :title="'Trending Now'" :items="trendingItems" />
    </section>
    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Popular</h2>
    </section>
    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Top Rated</h2>
    </section>
    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Favourites</h2>
    </section>
    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Upcoming Movies</h2>
    </section>
    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Upcoming TV Series</h2>
    </section>
  </main>
</template>

<style scoped>
.home-container {
  gap: 2.5rem;
}

.trailer {
  height: 43rem;
  background: linear-gradient(
    to right top,
    rgba(34, 118, 83, 0.75),
    rgba(13, 38, 28, 0.75)
  );
}

h2 {
  color: var(--green-1);
}
</style>
