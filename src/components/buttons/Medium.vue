<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  isButton: {
    type: Boolean,
    default: false,
  },
  isSubmit: {
    type: Boolean,
    default: false,
  },
  isReset: {
    type: Boolean,
    default: false,
  },
  leftIcon: {
    type: String,
    required: false,
    default: "",
  },
  rightIcon: {
    type: String,
    required: false,
    default: "",
  },
});

const emit = defineEmits(["click"]);

const buttonType = computed<"button" | "submit" | "reset">(() => {
  if (props.isSubmit) return "submit";
  if (props.isReset) return "reset";
  return "button"; // default
});
</script>

<template>
  <button
    class="btn medium-btn"
    :class="`btn-${props.type}`"
    :type="buttonType"
    @click="emit('click')"
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
  </button>
</template>

<style scoped>
.medium-btn {
  transition: background 0.2s, color 0.2s;
  color: var(--silver-7);
}

.medium-btn:hover {
  background-color: var(--silver-1);
  color: var(--white);
}

.btn-icon {
  color: var(--silver-7);
}

.medium-btn:hover .btn-icon {
  color: var(--white);
}
</style>
