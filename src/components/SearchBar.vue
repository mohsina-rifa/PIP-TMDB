<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  onSearchClick: {
    type: Function,
    default: () => {},
  },
});

const searchText = ref("");

const handleSearch = (): void => {
  props.onSearchClick(searchText.value);
};
</script>

<template>
  <div
    class="search-bar d-flex align-items-center gap-0 rounded-2 overflow-hidden me-3"
  >
    <input
      v-model="searchText"
      type="text"
      class="search-input fs-6 bg-transparent border-none"
      placeholder="Search movies, TV..."
      @keyup.enter="handleSearch"
    />
    <button
      class="btn cursor-pointer fw-bold rounded-2 border-0 d-flex align-items-center"
      type="button"
    >
      <i class="bi bi-search"></i>
    </button>
  </div>
</template>

<style scoped>
.search-bar {
  background: rgba(224, 224, 224, 0.35);
  color: var(--silver-6);
  height: 2.2rem;
}

.search-input {
  outline: none;
  padding: 0.4rem 0.8rem;
  color: var(--silver-6);
  width: 160px;
}

.search-input::placeholder {
  color: var(--silver-7);
}

.btn {
  background: var(--silver-7);
  color: var(--green-1);
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  font-weight: bolder;
  height: 100%;
}

.btn:hover {
  background: var(--silver-6);
  color: var(--green-1);
  transition: background 0.2s;
}
</style>
