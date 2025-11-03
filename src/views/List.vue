<script setup lang="ts">
import { ref, computed } from "vue";
import type { Show } from "../types/auth";
import { useRoute } from "vue-router";
import Dropdown from "../components/buttons/Dropdown.vue";
import AllFiles from "../components/AllFiles.vue";

const route = useRoute();

const category = route.params.category as string;

const dummyListItems: Show[] = [
  {
    id: "dl_1",
    title: "Item One",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2020,
    rating: 5,
    genres: [
      "Action", 
      "Adventure",
    ],
  },
  {
    id: "dl_2",
    title: "Item Two",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2019,
    rating: 4.5,
    genres: [
      "Thriller", 
      "Adventure",
    ],
  },
  {
    id: "dl_3",
    title: "Item Three",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2018,
    rating: 4.8,
    genres: [
      "Action", 
      "Thriller",
    ],
  },
  {
    id: "dl_4",
    title: "Item Four",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2017,
    rating: 4.3,
    genres: [
      "Romance",
      "Adventure",
    ],
  },
  {
    id: "dl_5",
    title: "Item Five",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2016,
    rating: 4,
    genres: [
      "Action",
      "Romance",
    ],
  },
  {
    id: "dl_6",
    title: "Item Six",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2015,
    rating: 4.2,
    genres: [
      "Romance",
      "Drama",
    ],
  },
  {
    id: "dl_7",
    title: "Item Seven",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2014,
    rating: 4.7,
    genres: [
      "Drama",
      "Adventure",
    ],
  },
  {
    id: "dl_8",
    title: "Item Eight",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2013,
    rating: 4.6,
    genres: [
      "Action",
      "Fantasy",
    ],
  },
  {
    id: "dl_9",
    title: "Item Nine",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2012,
    rating: 5,
    genres: [
      "Mystery",
      "Adventure",
    ],
  },
  {
    id: "dl_10",
    title: "Item Ten",
    thumbnail: "/thumbnail.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    cast: [
      {
        name: "Actor One",
        role: "Role One",
        gender: "male",
        image: "",
      },
      {
        name: "Actor Two",
        role: "Role Two",
        gender: "female",
        image: "",
      },
      {
        name: "Actor Three",
        role: "Role Three",
        gender: "male",
        image: "",
      },
    ],
    release_year: 2011,
    rating: 3.9,
    genres: [
      "Fantasy",
      "Romance",
    ],
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
    return dummyListItems;
  } else if (filteredBy.value === "Highest Rated") {
    return dummyListItems.slice().reverse();
  } else if (filteredBy.value === "Newest") {
    return dummyListItems.slice(0, 5);
  }
  return dummyListItems;
});

const onFilterSelect = (option: string): void => {
  filteredBy.value = option;
};

const sortOptions = ["Release date", "A-Z", "Z-A"];

const sortedBy = ref("");

const sortedItems = computed(() => {
  if (sortedBy.value === "A-Z") {
    return [...dummyListItems].sort((a, b) => a.title.localeCompare(b.title));
  }
  if (sortedBy.value === "Z-A") {
    return [...dummyListItems].sort((a, b) => b.title.localeCompare(a.title));
  }
  // Default: Release date (original order)
  return dummyListItems;
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
