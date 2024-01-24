<script setup lang="ts">
import type { NuxtLinkProps } from '#app'

const props = defineProps<NuxtLinkProps>()
</script>

<template>
  <NuxtLink v-bind="props" class="button px-s py-xxs bold text-center">
    <slot />
  </NuxtLink>
</template>

<style scoped>
.button {
  border-radius: 10rem;
  border: 2px solid currentColor;
}
</style>