<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import Custom from "../components/buttons/Custom.vue";
import type { Movie } from "../types/auth";
import { useWatchlistStore } from "../store/watchlist/watchlist.store";

const router = useRouter();

const props = defineProps({
  items: {
    type: Array as () => Movie[],
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

const watchlistStore = useWatchlistStore();

const handleSave = () => {
  const currentItem = props.items[current.value];
  if (currentItem) {
    if (currentItem.mediaType === "tv") {
      const seriesItem = {
        details: currentItem,
        total_seasons: 0,
        seasons: [],
      };
      watchlistStore.addSeries(seriesItem);
    } else {
      watchlistStore.addMovie(currentItem);
    }
  }
};

const handleInfo = () => {
  const currentItem = props.items[current.value];
  if (currentItem) {
    const path =
      currentItem.mediaType === "tv"
        ? `/tv/${currentItem.id}`
        : `/movie/${currentItem.id}`;
    router.push(path);
  }
};
</script>

<template>
  <div
    class="trailer-container position-relative overflow-hidden d-flex text-start align-items-start justify-content-start h-100"
    v-if="items && items.length"
  >
    <Transition name="slide-fade" mode="out-in">
      <div
        :key="items[current]?.title"
        class="trailer-slide position-relative w-100 h-100"
      >
        <div
          class="trailer-bg position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center z-1"
          :style="{
            backgroundImage: `url(${
              items[current]?.thumbnail ?? './screen.png'
            })`,
          }"
        ></div>
        <div class="trailer-content position-relative z-2 py-5 px-5">
          <h1 class="trailer-title fw-bold mb-4">
            {{ items[current]?.title }}
          </h1>
          <p class="trailer-desc mb-4">{{ items[current]?.description }}</p>
          <div
            class="trailer-actions d-flex gap-3 align-items-center justify-content-start"
          >
            <Custom
              label="Save"
              type="success"
              :leftIcon="'bi bi-save'"
              @click="handleSave"
            />
            <Custom
              label="Info"
              type="secondary"
              :leftIcon="'bi bi-info-square'"
              @click="handleInfo"
            />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.trailer-container {
  background: linear-gradient(to right top, var(--black), var(--green-1));
}

.trailer-bg {
  filter: brightness(0.6);
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}

.trailer-content {
  color: var(--white);
  max-width: 600px;
  margin-top: 4rem;
  margin-left: 2rem;
}

.trailer-title {
  font-size: 4rem;
}

.trailer-desc {
  font-size: 1rem;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.55, 0, 0.1, 1);
  position: absolute;
  width: 100%;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
