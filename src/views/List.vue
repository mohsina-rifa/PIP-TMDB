<script setup lang="ts">
import type { Show } from "../types/auth";
import { useRoute } from "vue-router";

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
</script>

<template>
  <section class="list-container px-5 py-4">
    <h1 class="category-header fw-bold mb-4">{{ reverseKebab(category) }}</h1>
    <div class="card-grid">
      <div v-for="(item, idx) in trendingItems" :key="idx" class="card">
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
}

.list-container {
  min-height: 100vh;
}

.row {
  display: flex;
  flex-wrap: wrap;
  --bs-gutter-x: 0rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
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
