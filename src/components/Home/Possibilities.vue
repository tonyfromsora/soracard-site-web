<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

const { label, title, items } = defineProps<{
  label: string
  title: string
  items: { title: string; description: string }[]
  comparisonDetails: (string | Link)[]
}>()
</script>

<template>
  <section class="w container pt-xxl">
    <div class="text mb-l" data-aos="fade-up">
      <div class="accent bold mb-xxs">
        {{ label }}
      </div>
      <h2 class="mb-l">
        {{ title }}
      </h2>
      <div class="features">
        <div v-for="feature in items">
          <h3 class="text-m mb-xxs feature-title">
            <div class="icon mr-xxs">
              <img :src="`/icons/check.svg`" alt="Check icon">
            </div>
            {{ feature.title }}
          </h3>
          <p class="text-s">{{ feature.description }}</p>
        </div>
      </div>
    </div>
    <HomeCompare data-aos="fade-up" data-aos-delay="100" :details="comparisonDetails" />
  </section>
</template>

<style scoped>
.features {
  display: grid;
  gap: var(--space-s);
}

.icon {
  display: inline-flex;
  width: 3.2rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-accent);
}

.icon img {
  width: 2rem;
  height: 2rem;
}

.feature-title {
  display: flex;
  align-items: center;
}

@media (max-width: 639px) {
  .text {
    padding-left: var(--space-3xs);
    padding-right: var(--space-3xs);
  }
}

@media (min-width: 640px) {
  .container {
    padding-bottom: var(--space-xxl);
  }
}

@media (min-width: 960px) {
  .container {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .text {
    padding-right: var(--space-xxl);
  }
}
</style>