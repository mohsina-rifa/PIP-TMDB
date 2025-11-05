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

const toggleMenu = (): void => {
  showMenu.value = !showMenu.value;
};

const emit = defineEmits(["select"]);

const selectOption = (option: string): void => {
  showMenu.value = false;
  emit("select", option);
};
</script>

<template>
  <div class="dropdown-wrapper position-relative d-inline-block">
    <button
      class="btn dropdown-btn d-flex align-items-center fw-medium border-0 cursor-pointer"
      :class="`btn-${props.type}`"
      type="button"
      @click="toggleMenu"
    >
      <i
        v-if="props.leftIcon"
        :class="props.leftIcon"
        class="btn-icon me-2"
      ></i>
      <span>{{ label }}</span>
      <i
        v-if="props.rightIcon"
        :class="props.rightIcon"
        class="btn-icon ms-2"
      ></i>
      <i class="bi bi-chevron-down ms-2"></i>
    </button>
    <ul v-if="showMenu" class="dropdown-menu position-absolute py-2 list-unstyled m-0 d-block rounded-3">
      <li
        v-for="option in props.options"
        :key="option"
        class="dropdown-item py-2 px-3 cursor-pointer rounded-2"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown-wrapper {
  z-index: 1000;
}

.dropdown-btn {
  min-width: 120px;
  padding: 0.5rem 1.2rem;
  border-radius: 8px;
  background: var(--green-1);
  color: var(--white);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.2s, color 0.2s;
}

.dropdown-btn:hover,
.dropdown-btn:focus {
  background: var(--green-3);
  color: var(--white);
}

.btn-icon {
  font-size: 1.2rem;
  color: var(--white);
}

.dropdown-menu {
  top: 110%;
  background: var(--green-1);
  min-width: 140px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  z-index: 1001;
}

.dropdown-item {
  color: var(--white);
  transition: background 0.15s;
}

.dropdown-item:hover {
  background: var(--green-3);
}
</style>
