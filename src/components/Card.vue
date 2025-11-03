<script setup lang="ts">
import type { Movie, Cast, Episode } from "../types/auth";

const props = defineProps({
  item: {
    type: Object as () => Movie,
    default: () => ({} as Movie),
  },
  cast: {
    type: Object as () => Cast,
    default: () => ({} as Cast),
  },
  episode: {
    type: Object as () => Episode,
    default: () => ({} as Episode),
  },
  isCast: {
    type: Boolean,
    default: false,
  },
  isEpisode: {
    type: Boolean,
    default: false,
  },
  handleClick: {
    type: Function,
    default: () => () => {},
  },
});

const getDefaultCastImage = (gender: string): string => {
  return gender === "male" ? "/male_cast.png" : "/female_cast.png";
};
</script>

<template>
  <section class="mb-4">
    <div
      class="card d-flex flex-column align-items-center justify-content-end fw-bold rounded-3 shadow p-3 m-3"
    >
      <div v-if="isCast">
        <div class="card-img w-100 rounded-2 mb-2">
          <img
            class="w-100 h-100 object-fit-cover rounded-2"
            :src="cast.image || getDefaultCastImage(cast.gender)"
            alt="Cast"
          />
        </div>
        <div class="card-title fw-bold text-center">
          {{ cast.name }}
        </div>
      </div>
      <div v-else-if="isEpisode">
        <div class="card-img w-100 rounded-2 mb-2">
          <img
            class="w-100 h-100 object-fit-cover rounded-2"
            :src="episode.thumbnail || '../thumbnail.png'"
            alt="Thumbnail"
          />
        </div>
        <div class="card-title fw-bold text-center">
          {{ episode.episode_number }}. {{ episode.title }}
        </div>
      </div>
      <div v-else>
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
.card {
  min-width: 180px;
  max-width: 200px;
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
  height: 75%;
  background: var(--green-7);
}

.card-title {
  color: var(--white);
}
</style>
