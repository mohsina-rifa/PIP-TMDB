<script setup lang="ts">
import type { Show } from "../types/auth"

const props = defineProps({
  title : {
    type: String,
    required: true
  },
  items : {
    type: Array as () => Show[],
    required: true,
  }
})
</script>

<template>
  <section class="section-row">
    <h2 class="section-title">{{ title }}</h2>
    <div class="row-scroll">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="card"
      >
        <!-- Placeholder card content -->
        <div class="card-img"></div>
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
}

.row-scroll {
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.card {
  min-width: 180px;
  height: 260px;
  background: var(--green-3);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem;
}

.card-img {
  width: 100%;
  height: 70%;
  background: var(--green-5);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.card-title {
  color: var(--white);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
}
</style>