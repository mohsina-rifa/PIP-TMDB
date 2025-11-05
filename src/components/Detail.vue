<script setup lang="ts">
import { ref, computed } from "vue";
import type { Movie, Series } from "../types/auth";
import Custom from "../components/buttons/Custom.vue";
import Card from "./Card.vue";
import Dropdown from "./buttons/Dropdown.vue";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const props = defineProps({
  movie: {
    type: Object as () => Movie,
    default: () => ({} as Movie),
  },
  series: {
    type: Object as () => Series,
    default: () => ({} as Series),
  },
  isSeries: {
    type: Boolean,
    default: false,
  },
});

const watchlistStore = useWatchlistStore();

const currentItem = computed(() => {
  return props.isSeries ? props.series?.details : props.movie;
});

const seasonList = computed(() => {
  if (!props.isSeries || !props.series?.seasons) return [];
  return props.series.seasons.map((season) => `Season ${season.season_number}`);
});

const selectedSeason = ref(1);

const handleSeasonSelect = (option: string): void => {
  const num = Number(option.replace(/[^\d]/g, ""));
  selectedSeason.value = num;
};

const seasonWiseEpisodes = computed(() => {
  if (!props.isSeries || !props.series?.seasons) return [];
  const season = props.series.seasons.find(
    (s) => s.season_number === selectedSeason.value
  );
  return season ? season.episodes : [];
});

const handleSave = () => {
  if (props.isSeries && props.series) {
    watchlistStore.addSeries(props.series);
  } else if (props.movie) {
    watchlistStore.addMovie(props.movie);
  }
};

const handleUnsave = () => {
  if (props.isSeries && props.series?.details?.id) {
    watchlistStore.removeSeries(props.series.details.id);
  } else if (props.movie?.id) {
    watchlistStore.removeMovie(props.movie.id);
  }
};

const isInWatchlist = computed(() => {
  if (props.isSeries && props.series?.details?.id) {
    return watchlistStore.isSeriesInWatchlist(props.series.details.id);
  } else if (props.movie?.id) {
    return watchlistStore.isMovieInWatchlist(props.movie.id);
  }
  return false;
});
</script>

<template>
  <section id="detail-screen" v-if="currentItem">
    <div
      class="detail-container position-relative overflow-hidden d-flex text-start align-items-start justify-content-start"
    >
      <div
        class="detail-bg position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center z-1 bg-no-repeat"
        :style="{
          backgroundImage: `url(${currentItem.thumbnail ?? './screen.png'})`,
        }"
      ></div>
      <div class="detail-content position-relative z-2 py-1 px-5">
        <h1 class="detail-title fw-bold mb-1">
          {{ currentItem.title }}
        </h1>
        <h4 class="my-2">
          Rating: {{ currentItem.rating?.toFixed(1) || "N/A" }}
        </h4>
        <h5 class="mb-2" v-if="!isSeries && movie?.duration">
          Duration: {{ movie.duration }} min
        </h5>
        <h5 class="mb-2" v-if="isSeries && series?.total_seasons">
          Seasons: {{ series.total_seasons }}
        </h5>
        <h6 class="mb-4">Release Year: {{ currentItem.release_year }}</h6>
        <p class="detail-desc my-4">{{ currentItem.description }}</p>
        <div
          class="detail-actions d-flex gap-3 align-items-center justify-content-start"
        >
          <Custom
            :label="isInWatchlist ? 'Saved' : 'Save'"
            type="success"
            :leftIcon="'bi bi-folder-plus'"
            :disabled="isInWatchlist"
            @click="handleSave"
          />
          <Custom
            label="Remove"
            type="success"
            :leftIcon="'bi bi-folder-minus'"
            v-if="isInWatchlist"
            @click="handleUnsave"
          />
        </div>
        <div class="mt-4" v-if="currentItem.genres?.length">
          <span
            v-for="(genre, idx) in currentItem.genres"
            :key="idx"
            class="badge me-2 py-2 px-3"
          >
            {{ genre }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <section id="detail-cast" class="m-5" v-if="currentItem?.cast?.length">
    <div class="d-flex align-items-center justify-content-between mb-4 ms-2">
      <h1 class="row-title fw-bold text-start fs-1">Cast</h1>
    </div>
    <div class="row-scroll d-flex overflow-auto pb-2 gap-3 position-relative">
      <div v-for="(castMember, idx) in currentItem.cast" :key="idx">
        <Card :cast="castMember" :isCast="true" />
      </div>
    </div>
  </section>

  <section
    v-if="isSeries && seasonList.length > 0"
    id="detail-episodes"
    class="m-5"
  >
    <div class="d-flex align-items-center justify-content-between mb-4 ms-2">
      <h1 class="row-title fw-bold text-start fs-1">Seasons and Episodes</h1>
      <Dropdown
        label="Season"
        type="secondary"
        leftIcon="bi bi-tv"
        :options="seasonList"
        @select="handleSeasonSelect"
      />
    </div>
    <div class="row-scroll d-flex overflow-auto pb-2 gap-3 position-relative">
      <div v-for="(episode, idx) in seasonWiseEpisodes" :key="idx">
        <Card :isEpisode="true" :episode="episode" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.detail-container {
  height: 43rem;
  background: linear-gradient(to right top, var(--black), var(--green-1));
}

.detail-bg {
  filter: brightness(0.6);
}

.detail-content {
  color: var(--white);
  max-width: 45%;
  margin-top: 5rem;
  margin-left: 2rem;
}

.detail-title {
  font-size: 4rem;
  color: var(--white);
}

.detail-desc {
  font-size: 1.2rem;
}

.detail-actions .btn {
  font-size: 1.1rem;
}

.detail-actions .btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.row-title {
  color: var(--green-1);
  font-size: 1.3rem;
}

.row-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.row-scroll::-webkit-scrollbar {
  display: none;
}

.row-scroll::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 10rem;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to left,
    rgba(224, 224, 224, 0.5),
    transparent 50%
  );
  z-index: 2;
}

h1 {
  color: var(--green-1);
}

.badge {
  font-size: 0.9rem;
  color: var(--black);
  background-color: rgba(224, 224, 224, 0.75);
}
</style>
