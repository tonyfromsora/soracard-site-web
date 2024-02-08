<script setup lang="ts">
const { open, opacity, zIndex } = defineProps<{ open: boolean, opacity?: number, zIndex?: number }>()
</script>

<template>
  <div class="overlay" :class="{ open }" :style="`--opacity: ${opacity || '0.05'}; z-index: ${zIndex || '4'}`"></div>
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
  cursor: pointer;
}

.open.overlay {
  opacity: var(--opacity);
  visibility: visible;
}
</style>