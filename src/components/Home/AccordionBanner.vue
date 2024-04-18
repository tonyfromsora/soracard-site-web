<script setup lang="ts">
const { title, items } = defineProps<{
  title: string
  items: { title: string; content: (string | { title: string; href: string })[] }[]
}>()
</script>

<template>
  <section class="w container" data-aos="fade-up">
    <div class="block bg-light1 rounded">
      <div class="image">
        <img src="/home/accordion-banner.jpg" alt="SORA Wallet app with SORA Card">
      </div>
      <div class="text">
        <h2 class="mb-l">
          {{ title }}
        </h2>
        <Accordion :items="items" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.block {
  overflow: hidden;
}

.text {
  padding: var(--space-s);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 640px) {
  .container {
    padding-top: var(--space-xxl);
    padding-bottom: var(--space-xxl);
  }

  .text {
    padding: var(--space-xl);
  }
}

@media (min-width: 960px) {
  .block {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>