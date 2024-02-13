<script setup lang="ts">
import type { Link } from '~/lib/constants/types'

const links: (Link & { external?: boolean })[] = [{
  title: 'Terms and Conditions',
  href: '/terms'
}, {
  title: 'Privacy Policy',
  href: '/privacy'
}, {
  title: 'Restricted Countries',
  href: '/blacklist'
}, {
  title: 'Polkaswap Memorandum and Terms of Services',
  href: 'https://wiki.sora.org/polkaswap/terms',
  external: true
}, {
  title: 'Polkaswap Privacy Policy',
  href: 'https://wiki.sora.org/polkaswap/privacy',
  external: true
}, {
  title: 'SORA Wallet Terms and Conditions',
  href: 'https://sora.org/terms',
  external: true
}, {
  title: 'SORA Wallet Privacy Policy',
  href: 'https://sora.org/privacy',
  external: true
}, {
  title: 'Unlimit Privacy Policy ',
  href: 'https://www.unlimit.com/privacy-policy/',
  external: true
},]
</script>

<template>
  <div class="text-xs dark2 text-center py-s legal">
    <NuxtLink v-for="link in links" :href="link.href" class="hover-trigger p-3xs link"
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