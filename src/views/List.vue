<script setup lang="ts">
import { ref, computed } from "vue";
import type { Show } from "../types/auth";
import { useRoute } from "vue-router";
import Dropdown from "../components/buttons/Dropdown.vue";
import AllFiles from "../components/AllFiles.vue";

const route = useRoute();

const category = route.params.category as string;

const trendingItems: Show[] = [
  {
    title: "Item One",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Two",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Three",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Four",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Five",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Six",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  },
  {
    title: "Item Seven",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Item Eight",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Item Nine",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
  {
    title: "Item Ten",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.  ",
  },
];

const reverseKebab = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const filterOptions = ["Most Popular", "Highest Rated", "Newest"];

const filteredBy = ref("");

const filteredItems = computed(() => {
  if (filteredBy.value === "Most Popular") {
    return trendingItems;
  } else if (filteredBy.value === "Highest Rated") {
    return trendingItems.slice().reverse();
  } else if (filteredBy.value === "Newest") {
    return trendingItems.slice(0, 5);
  }
  return trendingItems;
});

const onFilterSelect = (option: string): void => {
  filteredBy.value = option;
};

const sortOptions = ["Release date", "A-Z", "Z-A"];

const sortedBy = ref("");

const sortedItems = computed(() => {
  if (sortedBy.value === "A-Z") {
    return [...trendingItems].sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortedBy.value === "Z-A") {
    return [...trendingItems].sort((a, b) => b.title.localeCompare(a.title));
  }
  // Default: Release date (original order)
  return trendingItems;
});

const onSortSelect = (option: string): void => {
  sortedBy.value = option;
};

const listItems = computed(() => {
  const sorted = sortedItems.value;
  const filtered = filteredItems.value;

  return sorted.filter((item) => filtered.some((f) => f.title === item.title));
});
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
  position: relative; /* Add this if not present */
  z-index: auto; /* Ensure it doesn't create stacking issues */
}

.row {
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-x: 0rem;
}
</style>
