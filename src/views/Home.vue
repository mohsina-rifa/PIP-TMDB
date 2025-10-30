<template>
  <main class="home-container d-flex flex-column min-vh-100">
    <section class="screen-section mb-4"></section>

    <section class="px-5">
      <h2 class="fs-3 fw-bold mb-4">Trending Now</h2>
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

<script setup lang="ts"></script>

<style scoped>
.home-container {
  gap: 2.5rem;
  background: var(--green-13);
}

.screen-section {
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
