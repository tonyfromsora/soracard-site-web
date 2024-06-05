<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/contacts.json'
import es from '~/lib/lang/es/contacts.json'

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

type PieceOfText = string | Link & {
  external?: boolean
}

const localePath = useLocalePath()
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
    <p class="text-s">
      <RichText :content="tm('text')" />
    </p>
  </section>
  <section class="w mb-3xl grid">
    <Tile v-bind="tm('telegram')" data-aos="fade-up" data-aos-delay="100" />
    <Tile v-bind="tm('discord')" data-aos="fade-up" data-aos-delay="200" />
  </section>
  <ContactSection :title="t('formTitle')" />
</template>

<style scoped>
.grid {
  max-width: 90rem;
  display: grid;
  gap: var(--space-s);
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>