<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Dropdown from "../components/buttons/Dropdown.vue";
import AllFiles from "../components/AllFiles.vue";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const watchlistStore = useWatchlistStore();

onMounted(() => {
  watchlistStore.loadFromLocalStorage();
});

const allWatchlistItems = computed(() => {
  const movies = watchlistStore.getAllMovies || [];
  const series = watchlistStore.getAllSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const filterOptions = ["Most Popular", "Highest Rated", "Newest"];

const filteredBy = ref("");

const filteredItems = computed(() => {
  let items = [...allWatchlistItems.value];

  if (filteredBy.value === "Highest Rated") {
    items = items.sort((a, b) => b.rating - a.rating);
  } else if (filteredBy.value === "Newest") {
    items = items.sort((a, b) => b.release_year - a.release_year);
  }

  return items;
});

const onFilterSelect = (option: string): void => {
  filteredBy.value = option;
};

const sortOptions = ["Release date", "A-Z", "Z-A"];

const sortedBy = ref("");

const sortedItems = computed(() => {
  let items = [...filteredItems.value];

  if (sortedBy.value === "A-Z") {
    items = items.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortedBy.value === "Z-A") {
    items = items.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortedBy.value === "Release date") {
    items = items.sort((a, b) => b.release_year - a.release_year);
  }

  return items;
});

const onSortSelect = (option: string): void => {
  sortedBy.value = option;
};

const listItems = computed(() => sortedItems.value);
</script>

<template>
  <section class="min-vh-100 px-5 py-4">
    <div
      class="d-flex align-items-center justify-content-between mb-4 mt-2 mx-2"
    >
      <h1 class="category-header mt-4 fw-bolder">Your Watch List</h1>
      <div class="d-flex gap-3">
        <Dropdown
          class="list-button"
          label="Filter"
          type="dark"
          :leftIcon="'bi bi-funnel'"
          :options="filterOptions"
          @select="onFilterSelect"
        />
        <Dropdown
          class="list-button"
          label="Sort"
          type="dark"
          :leftIcon="'bi bi-sort-down-alt'"
          :options="sortOptions"
          @select="onSortSelect"
        />
      </div>
    </div>
    <div v-if="listItems.length === 0" class="text-center py-5">
      <i class="bi bi-bookmark-x display-1 text-muted"></i>
      <p class="text-muted mt-3 fs-5">
        Your watchlist is empty. Start adding movies and TV shows!
      </p>
    </div>
    <AllFiles v-else :items="listItems" />
  </section>
</template>

<style scoped>
.category-header {
  color: var(--green-1);
  font-size: 3.25rem;
}

.list-button {
  background-color: var(--green-1) !important;
}

.list-button:hover {
  background-color: var(--green-3) !important;
}
</style>
