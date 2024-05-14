<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/fees.json'
import es from '~/lib/lang/es/fees.json'

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

const nav = computed(() => tm('items').map((item, i) => ({
  title: item.title,
  href: `#${i + 1}`,
}))
)

interface Item {
  title: string
  table: {
    action: string | null
    amount: string | { value: string, note: string }
    recurrence: string
  }[]
}
</script>

<template>
  <section class="container w my-3xl mx-auto" data-aos="fade-up">
    <SubNav :items="nav" />
    <div class="rich">
      <h1 class="mb-3xs">
        {{ t('headline') }}
      </h1>
      <p class="mt-3xs">
        {{ t('date') }}
      </p>
      <hr>
      <p>
        <strong>{{ t('lead.accent') }}</strong>
        {{ t('lead.regular') }}
      </p>
      <p class="text-s">
        {{ t('lead.note') }}
      </p>
      <template v-for="(item, i) in (tm('items') as Item[])">
        <h2 :id="`${i + 1}`">{{ item.title }}</h2>
        <table>
          <thead>
            <tr>
              <th style="width:50%">{{ t('action') }}</th>
              <th style="width:25%">{{ t('amount') }}</th>
              <th style="width:25%">{{ t('recurrence') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, j) in item.table" :key="j">
              <td :style="row.action ? '' : { borderTop: 0 }">{{ row.action || '' }}</td>
              <td v-if="typeof row.amount === 'string'">{{ row.amount }}</td>
              <td v-else>
                {{ row.amount.value }}<br>
                <small>{{ row.amount.note }}</small>
              </td>
              <td>{{ row.recurrence }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <p>
        {{ t('disclaimer') }}
      </p>
      <p>
        <RichText :content="tm('reference')" />
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