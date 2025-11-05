<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import type { Movie } from "../types/auth";
import { useRoute, useRouter } from "vue-router";
import Dropdown from "../components/buttons/Dropdown.vue";
import AllFiles from "../components/AllFiles.vue";
import Custom from "../components/buttons/Custom.vue";
import { filterService } from "../service/filter";
import { useMovieStore } from "../store/movie/movie.store";
import { useSeriesStore } from "../store/series/series.store";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const route = useRoute();
const router = useRouter();

const movieStore = useMovieStore();
const seriesStore = useSeriesStore();
const watchlistStore = useWatchlistStore();

const category = route.params.category as string;

const itemsPerPage = ref(21);
const currentPage = ref(1);

onMounted(async () => {
  genreMappings.value = await movieStore.fetchGenreMappings();

  await Promise.all([
    movieStore.fetchByCategory(category),
    seriesStore.fetchByCategory(category),
  ]);
});

const categoryItems = computed(() => {
  const categoryMap: Record<string, () => Movie[]> = {
    "trending-now": () => {
      const movies = movieStore.getTrendingMovies || [];
      const series = seriesStore.getTrendingSeries || [];
      return [...movies, ...series.map((s) => s.details)];
    },
    popular: () => {
      const movies = movieStore.getPopularMovies || [];
      const series = seriesStore.getPopularSeries || [];
      return [...movies, ...series.map((s) => s.details)];
    },
    "top-rated": () => {
      const movies = movieStore.getTopRatedMovies || [];
      const series = seriesStore.getTopRatedSeries || [];
      return [...movies, ...series.map((s) => s.details)];
    },
    watchlist: () => {
      const movies = watchlistStore.getAllMovies || [];
      const series = watchlistStore.getAllSeries || [];
      return [...movies, ...series.map((s) => s.details)];
    },
    "upcoming-movies": () => {
      return movieStore.getUpcomingMovies || [];
    },
    "upcoming-tv-series": () => {
      const series = seriesStore.getUpcomingSeries || [];
      return series.map((s) => s.details);
    },
  };

  const getItems = categoryMap[category];
  return getItems ? getItems() : [];
});

const reverseKebab = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const genreMappings = ref<{
  movieGenres: Record<string, number>;
  tvGenres: Record<string, number>;
}>({
  movieGenres: {},
  tvGenres: {},
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
  let items = categoryItems.value;

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

const onFilterSelect = (option: string): void => {
  currentPage.value = 1;
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
    return [...categoryItems.value].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }
  if (sortedBy.value === "Z-A") {
    return [...categoryItems.value].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }
  
  return categoryItems.value;
});

const onSortSelect = (option: string): void => {
  currentPage.value = 1;
  sortedBy.value = option;
};

const fullListItems = computed(() => {
  const sorted = Array.isArray(sortedItems.value)
    ? sortedItems.value
    : sortedItems.value;
  const filtered = filteredItems.value;

  return sorted.filter((item) => filtered.some((f) => f.title === item.title));
});

const listItems = computed(() => {
  const totalItems = currentPage.value * itemsPerPage.value;
  return fullListItems.value.slice(0, totalItems);
});

const showLoadMore = computed(() => {
  return fullListItems.value.length > listItems.value.length;
});

const loadMore = () => {
  currentPage.value += 1;
};
</script>

<template>
  <section class="list-container px-5 py-4">
    <div
      class="d-flex align-items-center justify-content-between mb-4 mt-2 mx-2"
    >
      <h1 class="category-header">{{ reverseKebab(category) }}</h1>
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
    <AllFiles :items="listItems" />
    
    <div v-if="showLoadMore" class="load-more-container d-flex justify-content-center align-items-center">
      <Custom
        class="px-5"
        label="Load More"
        type="secondary"
        @click="loadMore"
      />
    </div>
  </section>
</template>

<style scoped>
.category-header {
  color: var(--green-1);
  font-size: 3.25rem;
  font-weight: bolder;
}

.list-button {
  background-color: var(--green-1) !important;
}

.list-button:hover {
  background-color: var(--green-3) !important;
}

.list-container {
  min-height: 100vh;
}

.list-container,
.card-grid,
.d-flex {
  position: relative;
  z-index: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-x: 0rem;
}

.load-more-container {
  margin: 3rem 0;
}
</style>