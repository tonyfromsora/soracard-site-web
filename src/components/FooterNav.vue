<script setup lang="ts">
import nav from '@/lib/constants/navigation'
</script>

<template>
  <nav class="nav">
    <div class="logo flex bold">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-xs">
        <path
          d="M15.0498 30C12.4585 30 9.96678 29.4 7.87375 28.2L15.0498 17.5L22.2259 28.2C20.0332 29.3 17.6412 30 15.0498 30Z"
          fill="#EE1122" />
        <path
          d="M0 15C0 6.7 6.67774 0 15.0498 0C23.2226 0 30 6.7 30 15C30 19.9 27.8073 24.1 24.2193 26.9L16.2458 15H24.2193V12.5H16.2458V10H24.2193V7.5H5.8804V10H13.8538V12.5H5.8804V15H13.7542L5.78073 26.9C2.19269 24.1 0 19.9 0 15Z"
          fill="#EE1122" />
      </svg>

      © {{ (new Date).getFullYear() }} SORA
    </div>
    <div v-for="group in nav">
      <div class="py-3xs bold">{{ group.title }}</div>
      <ul>
        <li v-for="(item, i) in group.links" :style="`--delay: ${i * 0.05}s`">
          <NuxtLink :href="item.href" class="link hover-trigger py-3xs">
            <span class="hover-underline">{{ item.title }}</span>
            <img v-if="item.isExternal" src="/icons/external.svg" alt="external link icon" class="external">
            <span v-if="item.label" class="label bg-accent light1 rounded">{{ item.label }}</span>
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

.logo {
  align-items: center;
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
  padding: 1px 4px;
  display: inline-flex;
  font-size: 1rem;
  margin-right: -1.5em;
}

@media (max-width: 959px) {
  .logo {
    grid-column: span 2;
  }
}

@media (min-width: 960px) {
  .nav {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    padding-top: var(--space-xl);
  }
}
</style>