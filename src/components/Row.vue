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
  <section class="section-row">
    <h2 class="section-title fs-1 fw-bold mb-4">{{ title }}</h2>
    <div class="row-scroll">
      <div v-for="(item, idx) in items" :key="idx" class="card">
        <div class="card-img">
          <img :src="item.thumbnail || './thumbnail.png'" alt="Thumbnail" />
        </div>
        <div class="card-title">{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-row {
  margin-bottom: 2rem;
}

.section-title {
  color: var(--green-1);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 0.5rem;
  text-align: left;
}

.row-scroll {
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

h2 {
  color: var(--green-1);
}

.card {
  min-width: 180px;
  height: 260px;
  background: linear-gradient(
    to right top,
    rgba(34, 118, 83, 0.75),
    rgba(13, 38, 28, 0.75)
  );
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  justify-content: flex-end;
  padding: 1rem;
  margin: 1rem;
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.25s;
}

.card:hover {
  transform: scale(1.12);
  background-color: var(--green-1);
  box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  font-weight: bolder;
}

.card-img {
  width: 100%;
  height: 70%;
  background: var(--green-7);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.card-title {
  color: var(--white);
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
}
</style>
