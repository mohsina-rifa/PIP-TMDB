<template>
  <main class="home-container">
    <!-- Hero section (trailer/card area) -->
    <section class="hero-section"></section>

    <section class="home-section">
      <h2>Trending Now</h2>
    </section>
    <section class="home-section">
      <h2>Popular</h2>
    </section>
    <section class="home-section">
      <h2>Top Rated</h2>
    </section>
    <section class="home-section">
      <h2>Favourites</h2>
    </section>
    <section class="home-section">
      <h2>Upcoming Movies</h2>
    </section>
    <section class="home-section">
      <h2>Upcoming TV Series</h2>
    </section>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background: var(--green-13);
  min-height: 100vh;
}

.hero-section {
  width: 100%;
  height: 43rem;
  background: linear-gradient(
    to right top,
    rgba(34, 118, 83, 0.75),
    rgba(13, 38, 28, 0.75)
  );
  margin-bottom: 2rem;
  /* Add shadow or gradient if you want */
}

.home-section {
  padding: 0 2rem;
}

h2 {
  color: var(--green-1);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
</style>
