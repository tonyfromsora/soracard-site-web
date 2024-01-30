<script setup lang="ts">
const { open } = defineProps<{ open: boolean }>()
</script>

<template>
  <div class="overlay" :class="{ open }"></div>
</template>

<style scoped>
.overlay {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-dark1);
  z-index: 4;
  cursor: pointer;
}

.open.overlay {
  opacity: 0.05;
  visibility: visible;
}
</style>