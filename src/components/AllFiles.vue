<script setup lang="ts">
import type { Show } from "../types/auth";

const props = defineProps({
  items: {
    type: Array as () => Show[],
    required: true,
  },
});
</script>

<template>
  <div class="card-grid">
    <div v-for="(item, idx) in items" :key="idx" class="card">
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
</template>

<style scoped>
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
