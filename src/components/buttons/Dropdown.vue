<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  label: { type: String, required: true },
  type: { type: String, required: true },
  options: { type: Array as () => string[], default: () => [] },
  leftIcon: { type: String, default: "" },
  rightIcon: { type: String, default: "" },
});

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const emit = defineEmits(["select"]);

const selectOption = (option: string) => {
  showMenu.value = false;
  // Emit selected option
  emit("select", option);
};
</script>

<template>
  <div class="dropdown-wrapper position-relative">
    <button
      class="btn dropdown-btn"
      :class="`btn-${props.type}`"
      type="button"
      @click="toggleMenu"
    >
      <i
        v-if="props.leftIcon"
        :class="props.leftIcon"
        class="btn-icon me-1 fs-5 fw-bold"
      ></i>
      <span>{{ label }}</span>
      <i
        v-if="props.rightIcon"
        :class="props.rightIcon"
        class="btn-icon ms-1 fs-5 fw-bold"
      ></i>
      <i class="bi bi-chevron-down ms-2"></i>
    </button>
    <ul v-if="showMenu" class="dropdown-menu position-absolute mt-2">
      <li
        v-for="option in props.options"
        :key="option"
        class="dropdown-item"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-wrapper {
  display: inline-block;
}

.dropdown-btn {
  transition: background 0.2s, color 0.2s;
  color: var(--silver-7);
  min-width: 120px;
}

.dropdown-btn:hover {
  background-color: var(--silver-1);
  color: var(--white);
}

.btn-icon {
  color: var(--silver-7);
}

.dropdown-btn:hover .btn-icon {
  color: var(--white);
}

.dropdown-menu {
  background: var(--green-1);
  border-radius: 8px;
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  padding: 0.5rem 0;
  z-index: 10;
  list-style: none;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  color: var(--white);
  cursor: pointer;
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: var(--green-3);
}
</style>
