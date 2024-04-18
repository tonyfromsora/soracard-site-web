<script setup lang="ts">
const { title, viewAllButtonTitle } = defineProps<{
  title: string
  viewAllButtonTitle: string
}>()
</script>

<template>
  <div class="w mb-m flex title" data-aos="fade-up">
    <h2 class="text-xxl">
      {{ title }}
    </h2>
    <Button href="/blog" :title="viewAllButtonTitle" class="text-s" />
  </div>
  <BlogList :limit="3" data-aos="fade-up" data-aos-delay="100" />
</template>

<style scoped>
.title {
  flex-direction: column;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>