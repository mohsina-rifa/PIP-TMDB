<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Detail from "../components/Detail.vue";
import { useSeriesStore } from "../store/series/series.store";

const route = useRoute();
const seriesStore = useSeriesStore();
const seriesId = route.params.id as string;

onMounted(async () => {
  await seriesStore.fetchSeriesById(seriesId);
});

const series = computed(() => seriesStore.getCurrentSeries);
</script>

<template>
  <Detail v-if="series" :series="series" :isSeries="true" />
  <div
    v-else
    class="loading-container d-flex justify-content-center align-items-center min-vh-100"
  >
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  color: var(--green-1);
}
</style>
