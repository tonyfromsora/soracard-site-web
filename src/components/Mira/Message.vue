<script setup lang="ts">
const { from = 'You' } = defineProps<{ from: "You" | "Mira" }>()
</script>

<template>
  <div class="bg-light1 rounded px-s pt-s pb-xxs message">
    <div class="author bold mb-xs">
      <div class="avatar">
        <video v-if="from === 'Mira'" src="/mira.mp4" autoplay muted playsinline />
      </div>
      {{ from }}
    </div>
    <slot>
      <p>Typing...</p>
    </slot>
  </div>
</template>

<style scoped>
.author {
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
}

.avatar {
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-dark1);
}

.avatar video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.message :deep(p) {
  margin-bottom: var(--space-xxs);
}
</style>