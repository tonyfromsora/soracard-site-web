<script setup lang="ts">
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
      <span class="mr-xs">We use only necessary cookies to give you the most relevant experience.</span>{{ ' ' }}
      <NuxtLink to="/privacy" class="hover-deunderline">Learn more</NuxtLink>
    </p>
    <Button @click="handleCLick" light title="Accept" />
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