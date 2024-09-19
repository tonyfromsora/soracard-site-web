<script setup lang="ts">
type Section = {
  title: string
  table: {
    action: string
    price: string
  }[]
}

type Fees = {
  headline: string
  date: string
  action: string
  price: string
  altFeesLink: {
    title: string
    href: string
  }
  fees: Section[]
  disclaimer: string
  notes: string[]
  pdf: {
    title: string
    href: string
  }
}

const { messages } = defineProps<{ messages: { en: Fees, es: Fees } }>()

const { baseUrl } = useRuntimeConfig().public

const { t, tm } = useI18n({
  messages
})

const localePath = useLocalePath()

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

const nav = computed(() => tm('fees').map((item, i) => ({
  title: item.title,
  href: `#fees${i + 1}`,
}))
)
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1 class="mb-s">
        {{ t('headline') }}
      </h1>
      <span class="px-xs py-3xs bg-light1 rounded text-s">
        {{ t('date') }}
      </span>
      <hr>
      <p class="mb-m">
        <NuxtLink :to="localePath(t('altFeesLink.href'))">
          {{ t('altFeesLink.title') }}
        </NuxtLink>
      </p>

      <template v-for="(item, i) in (tm('fees') as Section[])">
        <h2 :id="`fees${i + 1}`">{{ item.title }}</h2>
        <table style="display: table;">
          <thead>
            <tr>
              <th style="width:67%">{{ t('action') }}</th>
              <th style="width:33%">{{ t('price') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, j) in item.table" :key="j">
              <td>{{ row.action }}</td>
              <td>{{ row.price }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <p v-for="note in tm('notes')" class="text-s mb-3xs">
        {{ note }}
      </p>

      <hr>

      <p class="mb-xxs">
        {{ t('disclaimer') }}
      </p>

      <p>
        <a :href="t('pdf.href')" target="_blank">
          {{ t('pdf.title') }}
        </a>
      </p>

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