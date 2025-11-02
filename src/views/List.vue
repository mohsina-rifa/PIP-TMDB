<script setup lang="ts">
import { ref } from "vue";
import type { Show } from "../types/auth";
import { useRoute } from "vue-router";
import Dropdown from "../components/buttons/Dropdown.vue";

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

const filteredItems = ref(trendingItems);

const filterOptions = ["Most Popular", "Highest Rated", "Newest"];

const onFilterSelect = (option: string): void => {
  if (option === "Most Popular") {
    filteredItems.value = trendingItems;
  } else if (option === "Highest Rated") {
    filteredItems.value = trendingItems.slice().reverse();
  } else if (option === "Newest") {
    filteredItems.value = trendingItems.slice(0, 5);
  } else {
    filteredItems.value = trendingItems;
  }
};

const sortOptions = ["Release date", "A-Z", "Z-A"];

const onSortSelect = (option: string) => {
  console.log("Sort selected:", option);
};

const reverseKebab = (str: string) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
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
    <div class="card-grid">
      <div v-for="(item, idx) in filteredItems" :key="idx" class="card">
        <div class="card-img w-100 rounded-2 mb-2">
          <img
            class="w-100 h-100 object-fit-cover rounded-2"
            :src="item.thumbnail || '/thumbnail.png'"
            alt="Thumbnail"
          />
        </div>
        <div class="card-title fw-bold text-center">
          {{ item.title }}
        </div>
      </div>
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
  position: relative; /* Add this if not present */
  z-index: auto; /* Ensure it doesn't create stacking issues */
}

.row {
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-x: 0rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 1.2rem;
}

.card {
  min-width: 230px;
  max-width: 340px;
  height: 340px;
  background: linear-gradient(
    to right top,
    rgba(18, 57, 49, 0.75),
    rgba(13, 38, 28, 0.75)
  );
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  margin: 0 auto;
}

.card:hover {
  transform: scale(1.06);
  background-color: var(--green-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  font-weight: bolder;
}

.card-img {
  width: 100%;
  height: 60%;
  background: var(--green-7);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-title {
  color: var(--white);
  margin-top: 0.5rem;
}
</style>
