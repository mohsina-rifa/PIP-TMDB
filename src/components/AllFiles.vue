<script setup lang="ts">
import type { Movie } from "../types/auth";
import Card from "./Card.vue";

const props = defineProps({
  items: {
    type: Array as () => Movie[],
    required: true,
  },
});
</script>

<template>
  <div class="card-grid">
    <div v-for="(item, idx) in items" :key="idx" class="custom-card">
      <Card :title="item.title" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(232px, 1fr));
  gap: 1.2rem;
}

.custom-card {
  min-width: 230px !important;
  max-width: 340px !important;
  height: 340px !important;
}
</style>
