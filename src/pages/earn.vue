<script setup lang="ts">
import en from '~/lib/lang/en/earn.json'
import es from '~/lib/lang/es/earn.json'

const { baseUrl } = useRuntimeConfig().public

const { t } = useI18n({
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
  <section class="rich px-s py-3xl mx-auto" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">
      {{ t('label') }}
    </span>
    <h1 class="my-m">
      {{ t('headline') }}
    </h1>
    <p class="text-l rich">
      {{ t('lead') }}
    </p>
    <hr>
    <p>
      {{ t('regularParagraph') }}
    </p>
    <p class="text-s">
      {{ t('firstSmallParagraph') }}
    </p>
    <img src="/earn/demeter.jpg" alt="Demeter image" style="max-width: 30rem; aspect-ratio: 1/1;">
    <hr>
    <p class="text-s">
      {{ t('secondSmallParagraph') }}
    </p>
  </section>
</template>