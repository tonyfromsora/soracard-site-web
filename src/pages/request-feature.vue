<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/requestFeature.json'
import es from '~/lib/lang/es/requestFeature.json'

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
  <section class="rich px-s pt-3xl pb-xl mx-auto text-center" data-aos="fade-up">
    <h1 class="mb-s">
      {{ t('headline') }}
    </h1>
    <p class="text-l">
      {{ t('lead') }}
    </p>
    <hr>
    <p>
      {{ t('primaryText') }}
    </p>
    <p v-for="(p, i) in (tm('secondaryParagraphs') as ((string | Link)[])[]) " class="text-s"
      :class="i < (tm('secondaryParagraphs').length - 1) ? 'mb-s' : ''">
      <RichText :content="p" />
    </p>
  </section>
  <section class="w mb-3xl tile">
    <Tile v-bind="tm('github')" data-aos="fade-up" data-aos-delay="100" />
  </section>
  <ContactSection :title="t('formTitle')" />
</template>

<style scoped>
.tile {
  max-width: 44rem;
}
</style>