<script setup lang="ts">
import Navbar from './Navbar.vue';


defineProps<{ msg: string }>()
</script>

<template>
  <Navbar />
  <h1>{{ msg }}</h1>
  <p>Hello World</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
