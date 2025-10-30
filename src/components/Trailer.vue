<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import Custom from "../components/buttons/Custom.vue";
import type { Show } from "../types/auth";

const props = defineProps({
  items: {
    type: Array as () => Show[],
    required: true,
  },
});

const current = ref(0);
let interval: number | undefined;

onMounted(() => {
  interval = window.setInterval(() => {
    current.value = (current.value + 1) % props.items.length;
  }, 5000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <div class="carousel-container" v-if="items && items.length">
    <div
      class="carousel-bg"
      :style="{ backgroundImage: `url(${items[current]?.thumbnail ?? './screen.png'})` }"
    ></div>
    <div class="carousel-content">
      <h1 class="carousel-title">{{ items[current]?.title }}</h1>
      <p class="carousel-desc">{{ items[current]?.description }}</p>
      <div class="carousel-actions d-flex gap-3">
        <Custom label="Save" type="success" :icon="'bi bi-save'" />
        <Custom label="Info" type="secondary" :icon="'bi bi-info-square'" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-left: 2rem;
  display: flex;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  background: linear-gradient(
    to right top,
    rgba(34, 118, 83, 0.43),
    rgba(13, 38, 28, 0.43)
  );
}

.carousel-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6);
  z-index: 1;
}

.carousel-content {
  position: relative;
  z-index: 2;
  padding: 2.5rem 3rem;
  color: var(--white);
  max-width: 600px;
  margin-top: 8rem;
}

.carousel-title {
  font-size: 7rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.carousel-desc {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.carousel-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: start;
}
</style>
