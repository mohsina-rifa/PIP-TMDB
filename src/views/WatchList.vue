<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Dropdown from "../components/buttons/Dropdown.vue";
import AllFiles from "../components/AllFiles.vue";
import Large from "../components/buttons/Large.vue";
import { filterService } from "../service/filter";
import { useMovieStore } from "../store/movie/movie.store";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const route = useRoute();
const router = useRouter();

const movieStore = useMovieStore();
const watchlistStore = useWatchlistStore();

const genreMappings = ref<{
  movieGenres: Record<string, number>;
  tvGenres: Record<string, number>;
}>({
  movieGenres: {},
  tvGenres: {},
});

onMounted(async () => {
  watchlistStore.loadFromLocalStorage();
  genreMappings.value = await movieStore.fetchGenreMappings();
});

const allWatchlistItems = computed(() => {
  const movies = watchlistStore.getAllMovies || [];
  const series = watchlistStore.getAllSeries || [];

  const transformedSeries = series.map((s) => s.details);

  return [...movies, ...transformedSeries];
});

const filterOptions = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Mystery",
  "Science Fiction",
  "Thriller",
  "War",
];

const filteredBy = computed(() => (route.query.genre as string) || "");

const filteredItems = computed(() => {
  let items = allWatchlistItems.value;

  if (filteredBy.value) {
    const genreIds = filterService.getGenreIds(
      filteredBy.value,
      genreMappings.value.movieGenres,
      genreMappings.value.tvGenres
    );

    if (genreIds.length > 0) {
      items = items.filter((item) =>
        item.genres?.some((genreId) => genreIds.includes(Number(genreId)))
      );
    }
  }

  return items;
});

const filterActive = ref(false);

const clearFilter = (): void => {
  if (filterActive.value) {
    filterActive.value = false;

    const query = { ...route.query };
    delete query.genre;
    router.push({ query });
  }
};

const onFilterSelect = (option: string): void => {
  filterActive.value = true;

  router.push({
    path: route.path,
    query: {
      ...route.query,
      genre: option,
    },
  });
};

const sortOptions = ["Release date", "A-Z", "Z-A"];

const sortedBy = ref("");

const sortedItems = computed(() => {
  if (sortedBy.value === "A-Z") {
    return [...allWatchlistItems.value].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
  if (sortedBy.value === "Z-A") {
    return [...allWatchlistItems.value].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }
  if (sortedBy.value === "Release date") {
    return [...allWatchlistItems.value].sort(
      (a, b) => b.release_year - a.release_year
    );
  }

  return allWatchlistItems.value;
});

const onSortSelect = (option: string): void => {
  sortedBy.value = option;
};

const listItems = computed(() => {
  const sorted = Array.isArray(sortedItems.value)
    ? sortedItems.value
    : sortedItems.value;
  const filtered = filteredItems.value;

  return sorted.filter((item) => filtered.some((f) => f.title === item.title));
});
</script>

<template>
  <section class="min-vh-100 px-5 py-4">
    <div
      class="d-flex align-items-center justify-content-between mb-4 mt-2 mx-2"
    >
      <h1 class="category-header mt-4 fw-bolder">Your Watch List</h1>
      <div class="d-flex gap-3">
        <Large
          v-if="filterActive"
          class="list-button"
          label="Reset"
          type="dark"
          :leftIcon="'bi bi-arrow-counterclockwise'"
          @click="clearFilter"
        />
        <Dropdown
          class="list-button rounded-3"
          label="Filter"
          type="dark"
          :leftIcon="'bi bi-funnel'"
          :options="filterOptions"
          @select="onFilterSelect"
        />
        <Dropdown
          class="list-button rounded-3"
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
  color: var(--white) !important;
}

.list-button i {
  color: var(--white) !important;
}

.list-button:hover {
  background-color: var(--green-3) !important;
}
</style>
