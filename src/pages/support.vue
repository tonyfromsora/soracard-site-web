<script setup lang="ts">
import en from '~/lib/lang/en/support.json'
import es from '~/lib/lang/es/support.json'

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

const { locale } = useI18n()

const { data } = await useAsyncData(`${locale}/support`, () => queryContent(`/support`).locale(locale.value).findOne())

if (!data.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    fatal: true
  })
}
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="data?.body?.toc?.links.map((el: any) => ({ title: el.text, href: `#${el.id}` })) || []" />
    <ContentRenderer :value="data" class="rich" />
  </section>
</template>

<style scoped>
.container {
  display: grid;
  gap: var(--space-s);
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: 1fr 3fr;
    gap: var(--space-xxl);
    place-items: start stretch;
  }
}
</style>