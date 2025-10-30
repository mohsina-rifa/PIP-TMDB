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
    class="btn custom-btn d-flex align-items-center gap-2"
    :class="`btn-${props.type}`"
    :type="buttonType"
    @click="emit('click')"
  >
    <i v-if="props.icon" :class="props.icon"></i>
    <span class="ms-1">{{ label }}</span>
  </button>
</template>

<style scoped>
.custom-btn {
  font-size: 1.25rem;
  padding: 0.5rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  background: var(--white);
  color: var(--green-1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  transition: background 0.2s, color 0.2s;
}
.custom-btn:hover {
  background: var(--green-7);
  color: var(--white);
}
</style>
