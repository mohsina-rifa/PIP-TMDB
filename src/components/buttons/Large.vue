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
    class="btn btn-lg"
    :class="`btn-${props.type}`"
    :type="buttonType"
    @click="emit('click')"
  >
    <i
      v-if="props.leftIcon"
      :class="props.leftIcon"
      class="btn-icon fs-5 fw-bold"
    ></i>
    <span class="ms-1">{{ label }}</span>
    <i
      v-if="props.rightIcon"
      :class="props.rightIcon"
      class="btn-icon fs-5 fw-bold"
    ></i>
  </button>
</template>

<style scoped></style>
