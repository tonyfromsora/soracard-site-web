<script setup lang="ts">
import en from '~/lib/lang/en/vision.json'
import es from '~/lib/lang/es/vision.json'

const { baseUrl } = useRuntimeConfig().public

const { t, tm } = useI18n({
  messages: { en, es },
})

useSeoMeta({
  title: t('seoMeta.title'),
  ogTitle: t('seoMeta.title'),
  twitterTitle: t('seoMeta.title'),
  description: t('seoMeta.description'),
  twitterDescription: t('seoMeta.description'),
  keywords: t('seoMeta.keywords'),
  ogDescription: t('seoMeta.description'),
  ogImage: `${baseUrl}/${t('seoMeta.ogImage')}`,
  twitterImage: `${baseUrl}/${t('seoMeta.ogImage')}`,
})
</script>

<template>
  <section class="w pt-3xl text-center">
    <span class="px-xs py-3xs bg-light1 rounded text-s" data-aos="fade-up">
      {{ t('label') }}
    </span>
    <h1 class="my-s" data-aos="fade-up" data-aos-delay="100">
      {{ t('headline') }}
    </h1>
    <div class="text-l mx-auto rich pb-xl" data-aos="fade-up" data-aos-delay="200">
      {{ t('description') }}
    </div>
    <div data-aos="fade-up" data-aos-delay="300">
      <YoutubeVideo id="1AGV3urOEiw" cover="/vision/video.jpg" class="mb-xxl" />
    </div>
  </section>
  <section class="rich px-s pb-3xl mx-auto" data-aos="fade-up">
    <p v-for="p in tm('paragraphs')">
      {{ p }}
    </p>
    <hr>
    <div class="text-center">
      <Button v-bind="tm('button')" class="text-s" target="_blank" />
    </div>
  </section>
</template>