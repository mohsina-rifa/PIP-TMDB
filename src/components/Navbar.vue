<script setup lang="ts">
const props = defineProps({
  onSearchClick: {
    type: Function,
    default: () => {},
  },
});
</script>

<template>
  <header class="navbar">
    <div class="navbar-left">
      <router-link to="/" class="brand">
        <!-- Bootstrap Film Icon -->
        <i class="bi bi-film logo"></i>
        <span class="title">TMDB-Serpent</span>
      </router-link>
    </div>

    <div class="navbar-center">
      <button class="btn btn--medium" type="button" @click="onSearchClick?.()">
        Search
      </button>
    </div>

    <nav class="navbar-right">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/movies/popular" class="nav-link">Movies</router-link>
      <router-link to="/tv/popular" class="nav-link">TV</router-link>
      <router-link to="/watchList" class="nav-link">Watchlist</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: var(--green-1); /* use palette */
  border-bottom: 1px solid var(--silver-3);
  margin: 0;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--white);
  text-decoration: none;
}

.logo {
  font-size: 1.4rem;
  color: var(--white);
}

.title {
  font-weight: 600;
  color: var(--white);
}

.navbar-center {
  flex: 1;
  display: flex;
  justify-content: center;
}

.navbar-right {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.nav-link {
  color: var(--white);
  text-decoration: none;
  padding: 0.35rem 0.5rem;
  border-radius: 6px;
}

.nav-link:hover {
  background: var(--green-8);
}

.btn {
  cursor: pointer;
  border: none;
  background: var(--silver-6);
  color: var(--green-1);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  font-weight: bold;
}

.btn--medium {
  padding: 0.45rem 0.8rem;
}
</style>
