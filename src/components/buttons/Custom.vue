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
  icon: {
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
    class="btn custom-btn fs-5 fw-semibold rounded-2 shadow d-flex align-items-center gap-2"
    :class="`btn-${props.type}`"
    :type="buttonType"
    @click="emit('click')"
  >
    <i v-if="props.icon" :class="props.icon" class="btn-icon fs-5 fw-bold"></i>
    <span class="ms-1">{{ label }}</span>
  </button>
</template>

<style scoped>
.custom-btn {
  padding: 0.5rem 1.5rem;
  background: var(--silver-7);
  color: var(--green-1);
  transition: background 0.2s, color 0.2s;
}

.custom-btn:hover {
  background: var(--green-1);
  color: var(--white);
  font-weight: bold;
}

.btn-icon {
  color: var(--green-1);
}

.custom-btn:hover .btn-icon {
  color: var(--white);
  font-weight: bolder;
}
</style>
