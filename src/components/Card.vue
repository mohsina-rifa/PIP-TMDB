<script setup lang="ts">
import { useRouter } from "vue-router";
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

const router = useRouter();

const handleCardClick = () => {
  // Don't navigate for cast or episode cards
  if (props.isCast || props.isEpisode) {
    if (props.handleClick) {
      props.handleClick();
    }
    return;
  }

  // For movie/series cards, navigate to detail page
  if (props.item) {
    const mediaType = props.item.mediaType || "movie";
    const route =
      mediaType === "tv" ? `/tv/${props.item.id}` : `/movie/${props.item.id}`;
    router.push(route);
  }
};
</script>

<template>
  <div
    class="card rounded-3 shadow overflow-hidden"
    @click="handleCardClick"
    :class="{ clickable: !isCast && !isEpisode }"
  >
    <!-- Image Section -->
    <div class="card-img px-3 pt-3">
      <img
        v-if="isCast"
        :src="cast.image || getDefaultCastImage(cast.gender)"
        alt="Cast"
        class="w-100 h-100 object-fit-cover"
      />
      <img
        v-else-if="isEpisode"
        :src="episode.thumbnail || '../thumbnail.png'"
        alt="Episode Thumbnail"
        class="w-100 h-100 object-fit-cover"
      />
      <img
        v-else
        :src="item.thumbnail || '../thumbnail.png'"
        alt="Movie Thumbnail"
        class="w-100 h-100 object-fit-cover"
      />
    </div>

    <!-- Title Section -->
    <div class="card-body p-3">
      <div class="card-title text-center">
        <span v-if="isCast">
          <span class="h6">{{ cast.name }}</span>
          <span class="text-muted">{{ cast.role }}</span>
        </span>
        <span v-else-if="isEpisode" class="h6"
          >{{ episode.episode_number }}. {{ episode.title }}</span
        >
        <span v-else class="h6">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 180px;
  height: 280px;
  background: linear-gradient(
    to right top,
    rgba(18, 57, 49, 0.75),
    rgba(13, 38, 28, 0.75)
  );
  transition: transform 0.3s cubic-bezier(0.4, 0.2, 0.2, 1), box-shadow 0.25s;
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
}

.card.clickable {
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  background-color: var(--green-1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.card-img {
  width: 100%;
  height: 220px;
  overflow: hidden;
  flex-shrink: 0;
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.card-body {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
}

.card-title {
  color: var(--white);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.3;
  max-height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
</style>
