<script setup lang="ts">
const { title } = defineProps<{
  title: string
  view: string
}>()

const localePath = useLocalePath()
</script>

<template>
  <section class="w my-xs">
    <NuxtLink :to="localePath('/blog/introducing-mira')" class="mira mx-auto rounded bg-light1 text-s" data-cursor-show
      :data-cursor-text="view" data-aos="fade-up">
      <video src="/home/mira.mp4" autoplay playsinline muted loop></video>
      <div class="info py-xs pr-xs">
        <h2 class="text-l">
          {{ title }}
        </h2>
        <div class="arrow" />
      </div>
    </NuxtLink>
  </section>
</template>

<style scoped>
.mira {
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: hidden;
  gap: var(--space-xs);
  max-width: 54rem;
}

.mira video {
  width: 100%;
  height: 100%;
  max-width: 19rem;
  object-fit: cover;
  aspect-ratio: 16/9;
  background-color: var(--color-dark1);
}

.info {
  display: flex;
  gap: var(--space-xs);
  justify-content: space-between;
  align-items: center;
}

.arrow {
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  position: relative;
}

.arrow::before,
.arrow::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/icons/arrow.svg') no-repeat center;
  background-size: contain;
  transition: transform 1s var(--ease), opacity 1s var(--ease);
}

.arrow::after {
  transform: translateX(100%) scaleX(0.5);
  opacity: 0;
}

@media (hover:hover) {
  .mira:hover .arrow::before {
    transform: translateX(-100%) scaleX(0.5);
    opacity: 0;
  }

  .mira:hover .arrow::after {
    transform: translateX(0) scaleX(1);
    opacity: 1;
  }
}
</style>