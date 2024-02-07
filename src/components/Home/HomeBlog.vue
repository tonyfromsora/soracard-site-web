<template>
  <div class="w mb-m flex title">
    <h2 class="text-xxl">Latest blog posts</h2>
    <Button href="/blog" title="See All" class="text-s" />
  </div>
  <BlogList :limit="3" />
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