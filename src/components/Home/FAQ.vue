<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

const { title, items } = defineProps<{
  title: string
  items: { title: string, content: (string | Link)[] }[]
}>()
</script>

<template>
  <section class="py-xxl w px-s container">
    <h2 class="mb-xl" style="max-width: 60rem">
      {{ title }}
    </h2>
    <Accordion :items="items" />
  </section>
</template>

<style scoped>
.container {
  max-width: 90rem;
}
</style>