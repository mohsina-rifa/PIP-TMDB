<script setup lang="ts">
import type { Show } from "../types/auth";
import AllFiles from "../components/AllFiles.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const dummyItems: Show[] = [
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
];

const reverseKebab = (str: string): string => {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
};

const searchTerm = reverseKebab(route.params.query as string);

const results = dummyItems.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
</script>

<template>
  <section class="search-results px-5 py-4">
    <h1 class="search-header d-flex mb-5 mt-3 mx-2 justify-content-start align-items-center">Results for "{{ searchTerm }}"</h1>
    <AllFiles :items="results" />
    <div v-if="results.length === 0" class="mt-3 text-muted">
      No results found.
    </div>
  </section>
</template>

<style scoped>
.search-header {
  color: var(--green-1);
  font-size: 3.25rem;
  font-weight: bolder;
}
</style>
