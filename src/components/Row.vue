<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Show } from "../types/auth";
import Medium from "./buttons/Medium.vue";
import Card from "./Card.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => Show[],
    required: true,
  },
});

const router = useRouter();

const toKebabCase = (str: string) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

const handleLoadAll = () => {
  router.push(`/list/${toKebabCase(props.title)}`);
};
</script>

<template>
  <section class="mb-4">
    <div class="d-flex align-items-center justify-content-between mb-4 ms-2">
      <h2 class="section-title fw-bold text-start fs-1">{{ title }}</h2>
      <Medium
        label="Load All"
        type="dark"
        :rightIcon="'bi bi-box-arrow-in-right'"
        @click="handleLoadAll"
      />
    </div>
    <div class="row-scroll d-flex overflow-auto pb-2 gap-3 position-relative">
      <div
        v-for="(item, idx) in items"
        :key="idx"
      >
        <Card :title="item.title" :item="item" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  color: var(--green-1);
  font-size: 1.3rem;
}

.row-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.row-scroll::-webkit-scrollbar {
  display: none;
}

.row-scroll::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 10em;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to left,
    rgba(224, 224, 224, 0.5),
    transparent 50%
  );
  z-index: 2;
}

h2 {
  color: var(--green-1);
}

.card {
  min-width: 180px;
  height: 260px;
  background: linear-gradient(
    to right top,
    rgba(18, 57, 49, 0.75),
    rgba(13, 38, 28, 0.75)
  );
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.25s;
}

.card:hover {
  transform: scale(1.12);
  background-color: var(--green-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  font-weight: bolder;
}

.card-img {
  height: 70%;
  background: var(--green-7);
}

.card-title {
  color: var(--white);
}
</style>
