<script setup lang="ts">
import { type Link } from '~/lib/constants/types'
export type SubNavLink = Link & { bold?: boolean }
const { items } = defineProps<{ items: SubNavLink[] }>()

const isOpen = ref(false)
</script>

<template>
  <div class="block" :class="{ open: isOpen }">
    <button class="py-xs px-s text-s bg-light1 rounded button" @click="isOpen = !isOpen">Navigation</button>
    <ul class="rounded py-s px-xs bg-light1 nav">
      <li v-for="item in items">
        <a :href="item.href" class="block text-s px-3xs hover-trigger" :class="item.bold ? 'bold py-xs' : 'py-3xs'"
          @click="isOpen = false">
          <span class="hover-underline">
            {{ item.title }}
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.nav {
  list-style: none;
  max-height: calc(100vh - var(--space-xxl) - var(--space-3xl));
  overflow-y: auto;
}

@media (max-width: 959px) {
  .block {
    z-index: 2;
    position: relative;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-3xs);
    width: 100%;
  }

  .button::after {
    content: '';
    width: 1.2em;
    height: 1.2em;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYgOWw2IDZsNiAtNiIgLz48L3N2Zz4=);
    background-size: contain;
    transition: transform 1s var(--ease);
  }

  .nav {
    transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease), transform 1s var(--ease);
    opacity: 0;
    visibility: hidden;
    transform: scaleY(0.75);
    transform-origin: top;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    box-shadow: var(--shadow);
  }

  .block.open .nav {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .block.open .button::after {
    transform: rotateX(-180deg);
  }
}

@media (min-width: 960px) {
  .block {
    position: sticky;
    top: var(--space-xxl);
  }

  .button {
    display: none;
  }

}
</style>