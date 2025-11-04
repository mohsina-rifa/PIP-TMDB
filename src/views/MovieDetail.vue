<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Detail from "../components/Detail.vue";
import { useMovieStore } from "../store/movie/movie.store";

const route = useRoute();
const movieStore = useMovieStore();
const movieId = route.params.id as string;

onMounted(async () => {
  await movieStore.fetchMovieById(movieId);
});

const movie = computed(() => movieStore.getCurrentMovie);
</script>

<template>
  <Detail v-if="movie" :movie="movie" :isSeries="false" />
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
