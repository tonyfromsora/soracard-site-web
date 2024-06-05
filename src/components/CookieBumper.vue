<script setup lang="ts">
import en from '~/lib/lang/en/cookieBumper.json'
import es from '~/lib/lang/es/cookieBumper.json'

const { t } = useI18n({
  messages: { en, es },
})

const localePath = useLocalePath()

const isVisible = ref(false)

const handleCLick = () => {
  try {
    window.localStorage.cookieMessageAccepted = true
  } catch (e) {
    console.warn('No access to localSotage')
  }
  isVisible.value = false
}

onMounted(() => {
  if (!window?.localStorage?.cookieMessageAccepted) {
    setTimeout(() => isVisible.value = true, 1000)
  }
})
</script>

<template>
  <div class="bumper p-xs text-s bg-dark1 light3 rounded" :class="{ visible: isVisible }">
    <p>
      <span class="mr-xs">{{ t('message') }}</span>{{ ' ' }}
      <NuxtLink :to="localePath('/privacy')" class="hover-deunderline nowrap">{{ t('learnMore') }}</NuxtLink>
    </p>
    <Button @click="handleCLick" light :title="t('accept')" />
  </div>
</template>

<style scoped>
.bumper {
  display: flex;
  gap: var(--space-s);
  align-items: center;
  justify-content: center;
  width: max-content;
  position: fixed;
  bottom: var(--space-xs);
  max-width: calc(100% - 2 * var(--space-xs));
  right: 50%;
  transition: transform 1.5s var(--ease), opacity 1.5s var(--ease), visibility 1.5s var(--ease);
  transform: translate3d(50%, var(--space-m), 0);
  opacity: 0;
  visibility: hidden;
  z-index: 27;
}

.bumper>button {
  min-width: fit-content;
}

.bumper.visible {
  transform: translate3d(50%, 0, 0);
  opacity: 1;
  visibility: visible;
}
</style>