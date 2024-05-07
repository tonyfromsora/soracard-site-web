<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

import en from '~/lib/lang/en/legalLinks.json'
import es from '~/lib/lang/es/legalLinks.json'

const { tm } = useI18n({
  messages: { en, es }
})

type LegalLink = Link & { external?: boolean }
const localePath = useLocalePath()
</script>

<template>
  <div class="text-xs dark2 text-center py-s legal">
    <NuxtLink v-for="link in (tm('legalLinks') as LegalLink[])"
      :href="link.external ? link.href : localePath(link.href)" class="hover-trigger p-3xs link"
      :target="link.external ? '_blank' : undefined">
      <span class="hover-underline">
        {{ link.title }}
      </span>
      <img v-if="link.external" src="/icons/external.svg" alt="external link icon" class="external">
    </NuxtLink>
  </div>
</template>

<style scoped>
.legal {
  border-top: 1px solid var(--color-semi-dark);
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
}

.external {
  width: 1em;
  height: 1em;
  object-fit: contain;
  opacity: 0.5;
}
</style>