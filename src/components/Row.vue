<script setup lang="ts">
import type { Show } from "../types/auth";

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
</script>

<template>
  <section class="mb-4">
    <h2 class="section-title fw-bold mb-4 ms-2 text-start fs-1">{{ title }}</h2>
    <div class="row-scroll d-flex overflow-auto pb-2">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="card d-flex flex-column align-items-center justify-content-end fw-bold rounded-3 shadow p-3 m-3"
      >
        <div class="card-img w-100 rounded-2 mb-2">
          <img
            class="w-100 h-100 object-fit-cover rounded-2"
            :src="item.thumbnail || '../thumbnail.png'"
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
.section-title {
  color: var(--green-1);
  font-size: 1.3rem;
}

.row-scroll {
  gap: 1rem;
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
