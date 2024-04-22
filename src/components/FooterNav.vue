<script setup lang="ts">
import type { NavGroup } from '~/lib/constants/types'

import en from '~/lib/lang/en/navigation'
import be from '~/lib/lang/be/navigation'

const { tm } = useI18n({
  messages: { en, be }
})

const isApplyModalOpen = useApplyModalState()
</script>

<template>
  <nav class="nav">
    <div v-for="group in (tm('navigation') as NavGroup[])">
      <div class="py-3xs bold">{{ group.groupTitle }}</div>
      <ul>
        <li v-for="(item, i) in group.links" :style="`--delay: ${i * 0.05}s`">
          <button v-if="('applyButton' in item)" class="link hover-trigger py-3xs" @click="isApplyModalOpen = true">
            <span class="hover-underline">{{ item.applyButton }}</span>
          </button>
          <NuxtLink v-else :href="item.href" class="link hover-trigger py-3xs">
            <span class="hover-underline">{{ item.title }}</span>
            <img v-if="item.external" src="/icons/external.svg" alt="external link icon" class="external">
            <span v-if="item.label" class="label bold rounded">{{ item.label }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  display: grid;
  gap: var(--space-s) var(--space-m);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  padding-top: var(--space-m);
  padding-bottom: var(--space-m);
  place-items: start;
}

ul {
  list-style: none;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.link {
  display: flex;
  gap: 0.4em;
  justify-content: flex-start;
  align-items: center;
}

.external {
  width: 1em;
  height: 1em;
  object-fit: contain;
  opacity: 0.5;
}

.label {
  text-transform: uppercase;
  padding: 1px 4px 0 4px;
  display: inline-flex;
  font-size: 1rem;
  margin-right: -1.5em;
  border: 1px solid var(--color-accent);
}

@media (min-width: 960px) {
  .nav {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding-top: var(--space-xl);
  }
}
</style>