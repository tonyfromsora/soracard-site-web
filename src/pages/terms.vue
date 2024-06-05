<script setup lang="ts">
import en from '~/lib/lang/en/terms.json'
import es from '~/lib/lang/es/terms.json'
import { type SubNavLink } from '~/components/SubNav.vue'

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

const { data } = await useAsyncData(`${locale}/terms`, () => queryContent(`/terms`).locale(locale.value).findOne())

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
    <SubNav :items="data?.body?.toc?.links.reduce((acc, val) => {
      acc.push({ title: val.text, href: `#${val.id}`, bold: true })
      val.children?.forEach((el: any) => {
        acc.push({ title: el.text, href: `#${el.id}` })
      })
      return acc
    }, [] as SubNavLink[]) || []" />
    <div class="rich">
      <h1 class="mb-3xs">{{ t('headline') }}</h1>
      <p class="mt-3xs mb-l">{{ t('date') }}</p>
      <ContentRenderer :value="data" />
    </div>
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