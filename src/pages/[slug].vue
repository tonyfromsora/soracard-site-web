<template>
  <ContentDoc>
    <template v-slot="{ doc }">
      <article class="pb-3xl">
        <BlogHeroSection :title="doc.title || 'Title is missing'"
          :description="doc.description || 'Description is missing'"
          :image="doc.image || 'https://sora.org/assets/products/sora-card.jpg'" :date="doc.date || 'Date is missing'" />
        <main class="rich text-m w px-xs">
          <ContentRenderer :value="doc" class="rich px-xs" />
        </main>
      </article>
    </template>
  </ContentDoc>
</template>