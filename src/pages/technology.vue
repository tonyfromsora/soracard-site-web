<script setup lang="ts">
import type { RichTextElement } from '~/lib/constants/types'
import en from '~/lib/lang/en/technology.json'
import es from '~/lib/lang/es/technology.json'

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
  <section class="rich px-s py-3xl mx-auto" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">
      {{ t('label') }}
    </span>
    <h1 class="text-xl my-m">
      {{ t('headline') }}
    </h1>
    <p class="text-l">
      <RichText :content="tm('lead')" />
    </p>
    <hr>
    <p>
      <RichText :content="tm('paragraphBeforeImage')" />
    </p>
    <img src="/about/polkaswap.jpg" alt="Polkaswap app on desktop & mobile screens" style="aspect-ratio: 16/10;">
    <p v-for="p in (tm('paragraphsAfterImage') as RichTextElement[][])">
      <RichText :content="p" />
    </p>
    <hr>
    <div class="text-center">
      <Button v-bind="tm('button')" class="text-s" target="_blank" />
    </div>
  </section>
</template>