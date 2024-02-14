<script setup lang="ts">
import { type BlogArticleMeta } from '@/lib/constants/types'
const { title, description, date, image } = defineProps<BlogArticleMeta>()
</script>

<template>
  <section class="hero relative text-center pt-3xl pb-xl">
    <div class="w">
      <h1 class="mb-s" data-aos="fade-up">
        {{ title }}
      </h1>
      <p class="text-l mb-m mx-auto" data-aos="fade-up" data-aos-delay="100">
        {{ description }}
      </p>
      <p class="date text-s color-dark2 mb-l mx-auto" data-aos="fade-up" data-aos-delay="200">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M3.33325 5.83333C3.33325 5.3913 3.50885 4.96738 3.82141 4.65482C4.13397 4.34226 4.55789 4.16666 4.99992 4.16666H14.9999C15.4419 4.16666 15.8659 4.34226 16.1784 4.65482C16.491 4.96738 16.6666 5.3913 16.6666 5.83333V15.8333C16.6666 16.2754 16.491 16.6993 16.1784 17.0118C15.8659 17.3244 15.4419 17.5 14.9999 17.5H4.99992C4.55789 17.5 4.13397 17.3244 3.82141 17.0118C3.50885 16.6993 3.33325 16.2754 3.33325 15.8333V5.83333Z"
            stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M13.3333 2.5V5.83333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M6.66675 2.5V5.83333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
            stroke-linejoin="round" />
          <path d="M3.33325 9.16666H16.6666" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        {{ (new Date(date)).toDateString() }}
      </p>
      <img :src="image" alt="Article cover image" class="rounded" data-aos="fade-up" data-aos-delay="300">
    </div>
  </section>
</template>

<style scoped>
.hero::before {
  content: '';
  background-color: var(--color-light2);
  position: absolute;
  top: 0;
  right: 0;
  bottom: calc(min(100vw, 128rem) * 0.26 + var(--space-xl));
  left: 0;
  z-index: -1;
}

.hero p {
  max-width: 90rem;
}

.date {
  display: flex;
  gap: var(--space-xxs);
  align-items: center;
  justify-content: center;
}

.hero img {
  aspect-ratio: 16/9;
  object-fit: cover;
  background-color: var(--color-dark2);
}
</style>