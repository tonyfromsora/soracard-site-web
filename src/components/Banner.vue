<script setup lang="ts">
const { image, background } = defineProps<{
  image: {
    src: string
    alt: string
  }
  background?: string
}>()
</script>

<template>
  <section class="w container pb-xxl">
    <div class="grid rounded bg-dark1 light1" :style="{ 'background-color': background }">
      <div class="text">
        <slot />
      </div>
      <div class="image">
        <img :src="image.src" :alt="image.alt" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  padding: var(--space-m) var(--space-s);
}

.grid {
  overflow: hidden;
  display: grid;
}

.image {
  aspect-ratio: 1/1;
  position: relative;
}

.image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 640px) {
  .text {
    align-self: center;
    padding: var(--space-xl);
  }

  .container {
    padding-top: var(--space-xl);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .image {
    height: 100%;
  }
}
</style>