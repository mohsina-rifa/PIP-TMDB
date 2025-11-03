<script setup lang="ts">
import type { Show} from "../types/auth";
import Card from "./Card.vue";

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
    {
      name: "Actor Two",
      role: "Role Two",
      gender: "female",
      image: "",
    },
    {
      name: "Actor Three",
      role: "Role Three",
      gender: "male",
      image: "",
    },
  ],
  release_year: 2027,
  rating: 4.5,
  genres: ["Drama", "Action"],
};
</script>

<template>
  <section id="detail-screen">
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
        </div>
      </div>
    </div>
  </section>
  <section id="detail-cast" class="m-5">
    <div class="d-flex align-items-center justify-content-between mb-4 ms-2">
      <h1 class="row-title fw-bold text-start fs-1">Casts</h1>
    </div>
    <div class="row-scroll d-flex overflow-auto pb-2 gap-3 position-relative">
      <div v-for="(item, idx) in itemDetail.cast" :key="idx">
        <Card :title="item.name" :cast="itemDetail.cast[idx]" :isCast="true" />
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
  color: var(--white);
}

.detail-desc {
  font-size: 1.2rem;
}

.detail-actions .btn {
  font-size: 1.1rem;
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
</style>
