<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article class="pb-3xl">
        <BlogHeroSection :title="doc.title || 'Title is missing'"
          :description="doc.description || 'Description is missing'"
          :image="doc.image || 'https://sora.org/assets/products/sora-card.jpg'" :date="doc.date || 'Date is missing'" />

        <ContentRenderer :value="doc" class="text-m w rich px-s" />

      </article>
    </template>
    <template #not-found>
      <h1 class="text-3xl text-center w py-3xl">Not found</h1>
    </template>
  </ContentDoc>
</template>