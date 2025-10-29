<script setup lang="ts">
import SearchBar from './SearchBar.vue';
const props = defineProps({
  onSearchClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <header
    class="navbar d-flex align-items-center justify-content-between gap-3 py-2 px-4 border-bottom"
  >
    <div class="navbar-left">
      <router-link
        to="/"
        class="brand d-flex align-items-center gap-2 text-decoration-none"
      >
        <i class="logo bi bi-film pe-1"></i>
        <span class="title fw-semibold">TMDB-Serpent</span>
      </router-link>
    </div>

    <nav class="d-flex align-items-center gap-3">
      <router-link to="/" class="nav-link text-decoration-none rounded-2"
        >Home</router-link
      >
      <router-link
        to="/movies/popular"
        class="nav-link text-decoration-none rounded-2"
        >Movies</router-link
      >
      <router-link
        to="/tv/popular"
        class="nav-link text-decoration-none rounded-2"
        >TV</router-link
      >
      <router-link
        to="/watchList"
        class="nav-link text-decoration-none rounded-2"
        >Watchlist</router-link
      >
      <SearchBar />
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--green-1); /* use palette */
  border-bottom: 1px solid var(--silver-3);
}

.brand {
  color: var(--white);
}

.logo {
  font-size: 1.4rem;
  color: var(--white);
}

.title {
  color: var(--white);
}

.nav-link {
  color: var(--white);
  padding: 0.5rem 0.75rem;
}

.nav-link:hover {
  color: var(--white);
  font-weight: bolder;
  transition: background 0.2s, font-weight 0.2s, color 0.2s;
}
</style>
