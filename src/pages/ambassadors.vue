<script setup lang="ts">
import en from '~/lib/lang/en/ambassadors.json'
import es from '~/lib/lang/es/ambassadors.json'

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
      {{ t("label") }}
    </span>
    <h1 class="text-xl my-m">
      {{ t("headline") }}
    </h1>
    <p class="text-l">
      {{ t('lead') }}
    </p>
    <hr>
    <p>
      {{ t('firstParagraph') }}
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="Gcqw4g1g-bo" cover="/ambassadors/video.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        {{ t('videoCaption') }}
      </figcaption>
    </figure>
    <p>
      {{ t('secondParagraph') }}
    </p>
    <hr>
    <p class="text-center">
      {{ t('ctaMessage') }}
    </p>
    <hr>
    <div class="text-center">
      <Button href="https://medium.com/sora-xor/天-become-a-sorambassador-ed290dadb247" :title="t('ctaButton')"
        class="text-s" target="_blank" />
    </div>
  </section>
</template>