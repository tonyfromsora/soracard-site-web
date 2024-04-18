<script setup lang="ts">
import contents from '~/lib/lang/homepage'
const isApplyModalOpen = useApplyModalState()

useSeoMeta({
  title: contents.en.seoMeta.title,
  ogTitle: contents.en.seoMeta.title,
  twitterTitle: contents.en.seoMeta.title,
})
</script>

<template>
  <HomeHero v-bind="contents.en.hero" />
  <HomeMira id="more" />
  <HomeFeatures id="features" v-bind="contents.en.features" />
  <HomeValue v-bind="contents.en.value" />
  <HomeAccordionBanner v-bind="contents.en.accordionBanner" />
  <HomePossibilities v-bind="contents.en.possibilities" />
  <HomeFAQ id="faq" data-aos="fade-up" v-bind="contents.en.faq" />
  <HomeBlog v-bind="contents.en.blog" />
  <Banner :image="{
    src: '/home/banner.jpg',
    alt: 'Hand holding SORA Card'
  }" data-aos="fade-up">
    <h2 class="mb-m">
      {{ contents.en.getCardBanner.title }}
    </h2>
    <p class="text-l mb-l">
      {{ contents.en.getCardBanner.description }}
    </p>
    <Button :title="contents.en.getCardBanner.applyButtonTitle" large light
      @click="isApplyModalOpen = !isApplyModalOpen" />
  </Banner>
</template>