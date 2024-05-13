<script setup lang="ts">
import en from '~/lib/lang/en/referrals.json'
import es from '~/lib/lang/es/referrals.json'

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
  <section class="rich px-s py-3xl mx-auto text-center" data-aos="fade-up">
    <span class="px-xs py-3xs bg-light1 rounded text-s">
      {{ t('label') }}
    </span>
    <h1 class="my-m">
      {{ t('headline') }}
    </h1>
    <p class="text-l">
      {{ t('lead') }}
    </p>
    <hr>
    <Button v-bind="tm('button')" class="text-s" target="_blank" />
    <p class="text-s mt-xs">
      {{ t('subline') }}
    </p>
  </section>
</template>