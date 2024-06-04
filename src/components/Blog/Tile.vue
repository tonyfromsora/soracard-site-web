<script setup lang="ts">
import { type BlogArticleMeta } from '@/lib/constants/types'
import en from '~/lib/lang/en/blogTile.json'
import es from '~/lib/lang/es/blogTile.json'

const { t } = useI18n({
  messages: { en, es }
})

const { title, description, date, image, accented } = defineProps<BlogArticleMeta & { href: string, accented?: boolean }>()
</script>

<template>
  <NuxtLink :href="href" data-cursor-show :data-cursor-text="t('view')" class="tile" :class="{ accented }">
    <div class="image rounded">
      <img :src="image" alt="Article cover" :loading="accented ? undefined : 'lazy'">
    </div>
    <div>
      <p class="text-s mb-xxs dark2">{{ date }}</p>
      <h2>{{ title }}</h2>
      <p class="description dark2">{{ description }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.image {
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  background-color: var(--color-light2);
  margin-bottom: var(--space-s);
}

.image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s var(--ease);
  will-change: transform;
}

.tile h2 {
  font-size: var(--font-l);
  margin-bottom: var(--space-xs);
}

.description {
  font-size: var(--font-s);
}

@media (hover: hover) {
  .tile:hover .image img {
    transform: scale(1.05);
  }
}

@media (min-width: 640px) {
  .accented {
    margin-bottom: var(--space-l);
    grid-column-end: span 2;
  }

  .accented h2 {
    font-size: var(--font-xl);
  }

  .accented .description {
    font-size: var(--font-m);
  }
}

@media (min-width: 960px) {
  .accented {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: var(--space-xl);
    margin-bottom: var(--space-l);
    grid-column-end: span 3;
  }

  .accented .image {
    margin-bottom: 0;
  }
}
</style>