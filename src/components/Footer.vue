<script setup lang="ts">
import en from '~/lib/lang/en/disclaimers.json'
import es from '~/lib/lang/es/disclaimers.json'

const { tm } = useI18n({
  messages: { en, es }
})
</script>

<template>
  <footer class="bg-light2 text-s">
    <div class="w">
      <FooterNav />
      <div class="flex">
        <NuxtLink href="/" data-cursor-show data-cursor-text="Home" data-cursor-stick class="px-3xs py-xs"
          aria-label="Homepage">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15.0498 30C12.4585 30 9.96678 29.4 7.87375 28.2L15.0498 17.5L22.2259 28.2C20.0332 29.3 17.6412 30 15.0498 30Z"
              fill="#EE1122" />
            <path
              d="M0 15C0 6.7 6.67774 0 15.0498 0C23.2226 0 30 6.7 30 15C30 19.9 27.8073 24.1 24.2193 26.9L16.2458 15H24.2193V12.5H16.2458V10H24.2193V7.5H5.8804V10H13.8538V12.5H5.8804V15H13.7542L5.78073 26.9C2.19269 24.1 0 19.9 0 15Z"
              fill="#EE1122" />
          </svg>
        </NuxtLink>
        <Socials />
      </div>
      <div class="grid">
        <Apply />
        <div class="text-xs dark2">
          <p class="mb-3xs bold">
            © {{ (new Date).getFullYear() }} SORA
          </p>
          <p class="mb-3xs" v-for="disclaimer in tm('disclaimers')">{{ disclaimer }}</p>
        </div>
      </div>
      <LegalLinks />
    </div>
  </footer>
</template>

<style scoped>
.grid {
  display: grid;
  gap: var(--space-s);
  padding-top: var(--space-s);
  padding-bottom: var(--space-l);
}

.flex {
  border-bottom: 1px solid var(--color-semi-dark);
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 640px) {
  .flex {
    flex-direction: row;
    gap: var(--space-l);
  }
}

@media (min-width: 960px) {
  .grid {
    padding-top: var(--space-l);
    grid-template-columns: 2fr 1fr;
  }

  .grid>*:last-child {
    order: -1;
  }
}
</style>