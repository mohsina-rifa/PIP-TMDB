<script setup lang="ts">
import { useRouter } from "vue-router";
import SearchBar from "./SearchBar.vue";

const router = useRouter();

const setMoviesOnly = () => {
  router.push({ path: "/", query: { filter: "movies" } });
};

const setTVOnly = () => {
  router.push({ path: "/", query: { filter: "tv" } });
};

const clearFilter = () => {
  router.push("/");
};
</script>

<template>
  <header
    class="navbar d-flex align-items-center justify-content-between gap-3 py-2 px-4"
  >
    <div>
      <router-link
        to="/"
        class="brand d-flex align-items-center gap-2 text-decoration-none"
        @click="clearFilter"
      >
        <i class="logo bi bi-film pe-1"></i>
        <span class="title fw-semibold">TMDB-Serpent</span>
      </router-link>
    </div>

    <nav class="d-flex align-items-center gap-3">
      <router-link
        to="/"
        class="nav-link cursor-pointer text-decoration-none rounded-2"
        @click="clearFilter"
        >Home</router-link
      >
      <a
        @click="setMoviesOnly"
        class="nav-link cursor-pointer text-decoration-none rounded-2"
        role="button"
        >Movies</a
      >
      <a
        @click="setTVOnly"
        class="nav-link cursor-pointer text-decoration-none rounded-2"
        role="button"
        >TV</a
      >
      <router-link
        to="/watchList"
        class="nav-link cursor-pointer text-decoration-none rounded-2"
        >Watchlist</router-link
      >
      <SearchBar />
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: var(--green-1);
  border-bottom: 1px solid var(--black);
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

.nav-link:hover,
.nav-link:focus,
.nav-link:active {
  color: var(--white);
  font-weight: bolder;
  transition: background 0.2s, font-weight 0.2s, color 0.2s;
}
</style>
