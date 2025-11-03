<script setup lang="ts">
import { onMounted } from "vue";
import type { Show } from "../types/auth";

const itemDetail: Show = {
  id: "detail_1",
  title: "Detail One",
  thumbnail: "/thumbnail.png",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  cast: [
    {
      name: "Actor One",
      role: "Role One",
      gender: "male",
      image: "",
    },
  ],
  release_year: 2027,
  rating: 4.5,
  genres: ["Drama", "Action"],
};

const getDefaultCastImage = (gender: string): string => {
  return gender === "male" ? "/male_cast.png" : "/female_cast.png";
};

onMounted(() => {
  for (const cast of itemDetail.cast) {
    if (!cast.image) {
      cast.image = getDefaultCastImage(cast.gender);
    }
  }
});
</script>

<template>
  <div
    class="detail-container position-relative overflow-hidden d-flex text-start align-items-start justify-content-start"
  >
    <div
      class="detail-bg position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center z-1"
      :style="{
        backgroundImage: `url(${itemDetail.thumbnail ?? './screen.png'})`,
      }"
    ></div>
    <div class="detail-content position-relative z-2 py-5 px-5">
      <h1 class="detail-title fw-bold mb-4">
        {{ itemDetail.title }}
      </h1>
      <p class="detail-desc mb-4">{{ itemDetail.description }}</p>
      <div
        class="detail-actions d-flex gap-3 align-items-center justify-content-start"
      >
        <button class="btn btn-success rounded-2 px-4 py-2 fw-bold">
          <i class="bi bi-save me-2"></i>Save
        </button>
        <button class="btn btn-secondary rounded-2 px-4 py-2 fw-bold">
          <i class="bi bi-info-square me-2"></i>Info
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  height: 43rem;
  background: linear-gradient(to right top, var(--black), var(--green-1));
}

.detail-bg {
  filter: brightness(0.6);
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
}

.detail-content {
  color: var(--white);
  max-width: 600px;
  margin-top: 5rem;
  margin-left: 2rem;
}

.detail-title {
  font-size: 4rem;
}

.detail-desc {
  font-size: 1.2rem;
}

.detail-actions .btn {
  font-size: 1.1rem;
}
</style>
