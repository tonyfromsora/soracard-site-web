<script setup lang="ts">
import en from '~/lib/lang/en/integrations.json'
import es from '~/lib/lang/es/integrations.json'

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
  <IntegrationsHero v-bind="tm('hero')" />
  <IntegrationsProducts id="more" :items="tm('products')" />
  <Banner :image="{
    src: '/integrations/fearless-wallet.jpg',
    alt: t('banner.imageAlt')
  }" background="#11121B" data-aos="fade-up">
    <h2 class="mb-3xs">
      {{ t('banner.title') }}
    </h2>
    <div class="text-l mb-m rich">
      <ul>
        <li v-for="feature in tm('banner.features')">{{ feature }}</li>
      </ul>
    </div>
    <Button v-bind="tm('banner.button')" target="_blank" large light />
  </Banner>
</template>