<script setup lang="ts">
import nav from '@/lib/constants/navigation'

const navRef = ref(nav.map(el => ({ ...el, isOpen: false })))

const toggleAccordion = (i: number) => {
  if (navRef.value[i].isOpen) {
    navRef.value[i].isOpen = false
  } else {
    navRef.value.forEach((el, j) => {
      el.isOpen = i === j
    })
  }
}
</script>

<template>
  <nav>
    <ul class="groups">
      <li v-for="(group, i) in navRef" :key="group.title" :class="{ open: group.isOpen }" class="group">
        <div @click="toggleAccordion(i)" class="group-title p-xs bold" data-cursor-stick data-cursor="-scale">{{
          group.title }}</div>
        <div class="links" data-cursor="-hidden">
          <div>
            <ul>
              <li v-for="(item, i) in group.links" :style="`--delay: ${i * 0.05}s`">
                <NuxtLink :href="item.href" class="block hover-trigger px-xs py-3xs">
                  <span class="hover-underline">{{ item.title }}</span>
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
ul {
  list-style: none;
}

ul,
li {
  padding: 0;
  margin: 0;
}

.group li {
  opacity: 0;
  visibility: hidden;
  transform: translateY(3rem) scaleY(0.75);
  transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease), transform 1s var(--ease);
}

.group-title {
  display: flex;
  align-items: center;
  gap: var(--space-3xs);
}

.group-title::after {
  content: '';
  width: 1.2em;
  height: 1.2em;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb24tdGFibGVyLWNoZXZyb24tZG93biIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTYgOWw2IDZsNiAtNiIgLz48L3N2Zz4=);
  background-size: contain;
  transition: transform 1s var(--ease);
}

@media (max-width: 959px) {
  .group {
    border-bottom: 1px solid rgba(0, 0, 0, 0.20);
  }

  .group-title {
    cursor: pointer;
    justify-content: space-between;
  }

  .group>.links {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 1s var(--ease);
    overflow: hidden;
    text-align: center;
  }

  .links>* {
    min-height: 0;
  }

  .group.open>.links {
    grid-template-rows: 1fr;
  }

  .group.open li {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .links ul {
    padding-bottom: var(--space-s);
  }

  .group.open .group-title::after {
    transform: rotateX(-180deg);
  }
}

@media (min-width: 960px) {
  .groups {
    display: flex;
    justify-content: center;
  }

  .group {
    position: relative;
    cursor: pointer;
  }

  .links {
    position: absolute;
    right: 50%;
    background-color: var(--color-light1);
    box-shadow: var(--shadow);
    border-radius: var(--radius);
    transform-origin: top;
    transform: translateX(50%) scaleY(0.9);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.6s var(--ease), visibility 0.6s var(--ease), transform 1s var(--ease);
    width: fit-content;
    text-align: center;
    padding: var(--space-s) var(--space-m);
  }

  .links a {
    white-space: nowrap;
  }

  .group:hover {
    z-index: 2;
  }

  .group:hover .links {
    opacity: 1;
    visibility: visible;
    transform: translateX(50%);
  }

  .group:hover li {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition-delay: var(--delay);
  }

  .group:hover .group-title::after {
    transform: rotate(-180deg);
  }

  .group:active .links {
    transform: translateX(50%) scale(1.05);
  }
}
</style>