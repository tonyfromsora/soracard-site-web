<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/soranomics.json'
import es from '~/lib/lang/es/soranomics.json'

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

type Piece = string | { b: string } | Link

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
      {{ t('lead') }}
    </p>
    <hr>
    <p v-for="p in (tm('paragraphsBeforeVideo') as Piece[][])">
      <RichText :content="p" />
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="KEfdlctvHH4" cover="/soranomics/werner.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        {{ t('videoCaption') }}
      </figcaption>
    </figure>
    <p v-for="p in (tm('paragraphsAfterVideo') as Piece[][])">
      <RichText :content="p" />
    </p>
    <hr>
    <p class="text-center">
      {{ t('accentedParagraph') }}
    </p>
    <hr>
    <div class="text-center">
      <Button v-bind="tm('button')" class="text-s" target="_blank" />
    </div>
  </section>
</template>