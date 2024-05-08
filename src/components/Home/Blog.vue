<script setup lang="ts">
const { title, viewAllButtonTitle } = defineProps<{
  title: string
  viewAllButtonTitle: string
}>()
</script>

<template>
  <div class="w mb-m title" data-aos="fade-up">
    <h2 class="text-xxl">
      {{ title }}
    </h2>
    <Button href="/blog" :title="viewAllButtonTitle" class="text-s mb-xs" />
  </div>
  <BlogList :limit="3" data-aos="fade-up" data-aos-delay="100" />
</template>

<style scoped>
.title {
  display: grid;
  gap: var(--space-xs);
  align-items: flex-start;
}

@media (min-width: 640px) {
  .title {
    margin-top: var(--space-xxl);
  }
}

@media (min-width: 960px) {
  .title {
    grid-template-columns: 1fr auto;
    gap: var(--space-xxl);
    align-items: end;
  }
}
</style>