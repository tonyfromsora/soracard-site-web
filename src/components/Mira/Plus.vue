<script setup lang="ts">
const { expanded = false } = defineProps<{ expanded: boolean }>()
</script>

<template>
  <span class="plus" :class="{ expanded }" />
</template>

<style scoped>
.plus {
  display: inline-block;
  width: 1em;
  height: 1em;
  position: relative;
}

.plus::before,
.plus::after {
  content: '';
  display: block;
  width: 100%;
  height: .2em;
  border-radius: 1rem;
  margin: -0.1em 0;
  background: currentColor;
  position: absolute;
  top: 50%;
  left: 0;
  transition: transform 1s var(--ease);
}

.plus::after {
  transform: rotate(90deg);
}

.plus.expanded::after {
  transform: rotate(-180deg);
}

.plus.expanded::before {
  transform: rotate(-180deg);
}
</style>