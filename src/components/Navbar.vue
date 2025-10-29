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
        <i class="bi bi-film logo"></i>
        <span class="title">TMDB-Serpent</span>
      </router-link>
    </div>

    <nav class="navbar-right">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/movies/popular" class="nav-link">Movies</router-link>
      <router-link to="/tv/popular" class="nav-link">TV</router-link>
      <router-link to="/watchList" class="nav-link">Watchlist</router-link>
      <div class="search-bar">
        <input
          type="text"
          class="search-input"
          placeholder="Search movies, TV..."
        />
        <button class="btn btn--medium" type="button">
          <i class="bi bi-search"></i>
        </button>
      </div>
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
  margin: 5rem;
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
  font-weight: bolder;
  transition: background 0.2s, font-weight 0.2s, color 0.2s;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 0;
  background: rgba(224, 224, 224, 0.4);
  color: var(--silver-6);
  border-radius: 6px;
  overflow: hidden;
  margin-right: 1rem;
  height: 2.2rem;
}

.search-input {
  border: none;
  outline: none;
  padding: 0.4rem 0.8rem;
  font-size: 1rem;
  background: transparent;
  color: var(--silver-6);
  width: 160px;
}

.search-input::placeholder {
  color: var(--white);
  opacity: 0.7;
}

.btn.btn--medium {
  border-radius: 0 6px 6px 0;
  background: var(--silver-6);
  color: var(--green-1);
  font-weight: bolder;
  padding: 0 0.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  border: none;
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
