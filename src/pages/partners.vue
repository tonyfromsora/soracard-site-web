<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/partners.json'
import es from '~/lib/lang/es/partners.json'

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
      {{ t('lead') }}
    </p>
    <hr>
    <p>
      <template v-for="piece in (tm('firstParagraph') as (string | Link)[])">
        <template v-if="typeof piece === 'string'">
          {{ piece }}
        </template>
        <template v-else>
          <a :href="piece.href" target="_blank">{{ piece.title }}</a>
        </template>
      </template>
    </p>
    <figure class="mt-xl mb-l">
      <YoutubeVideo id="058n40NpfqM" cover="/partners/video.jpg" class="mb-s" />
      <figcaption class="text-center text-s">
        {{ t('videoCaption') }}
      </figcaption>
    </figure>
    <p>
      {{ t('secondParagraph') }}
    </p>
    <hr>
    <p class="text-center">
      {{ t('accentedParagraph') }}
    </p>
    <hr>
    <div class="text-center">
      <Button
        href="https://medium.com/sora-xor/updated-sora-and-polkaswap-decentralised-development-tutorial-17be25ec327b"
        :title="t('learnMore')" class="text-s" target="_blank" />
    </div>
  </section>
</template>