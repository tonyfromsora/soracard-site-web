<script setup lang="ts">
import en from '~/lib/lang/en/homepage.json'
import es from '~/lib/lang/es/homepage.json'

const { t, tm } = useI18n({
  messages: { en, es },
})

useSeoMeta({
  title: t('seoMeta.title'),
  ogTitle: t('seoMeta.title'),
  twitterTitle: t('seoMeta.title'),
})

const isApplyModalOpen = useApplyModalState()
</script>

<template>
  <HomeHero v-bind="tm('hero')" />
  <HomeMira v-bind="tm('mira')" id="more" />
  <HomeFeatures id="features" v-bind="tm('features')" />
  <HomeValue v-bind="tm('value')" />
  <HomeAccordionBanner v-bind="tm('accordionBanner')" />
  <HomePossibilities v-bind="tm('possibilities')" />
  <HomeFAQ id="faq" data-aos="fade-up" v-bind="tm('faq')" />
  <HomeBlog v-bind="tm('blog')" />
  <Banner :image="{
    src: '/home/banner.jpg',
    alt: 'Hand holding SORA Card'
  }" data-aos="fade-up">
    <h2 class="mb-m">
      {{ t('getCardBanner.title') }}
    </h2>
    <p class="text-l mb-l">
      {{ t('getCardBanner.description') }}
    </p>
    <Button :title="t('getCardBanner.applyButtonTitle')" large light @click="isApplyModalOpen = !isApplyModalOpen" />
  </Banner>
</template>