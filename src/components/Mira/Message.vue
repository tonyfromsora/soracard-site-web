<script setup lang="ts">
import en from '~/lib/lang/en/miraMessage.json'
import es from '~/lib/lang/es/miraMessage.json'

const { t } = useI18n({
  messages: { en, es }
})
const { fromMira = false } = defineProps<{ fromMira?: boolean }>()
</script>

<template>
  <div class="bg-light1 rounded px-s pt-s pb-xxs message">
    <div class="author bold mb-xs">
      <div class="avatar">
        <video v-if="fromMira" src="/mira.mp4" autoplay muted playsinline />
      </div>
      {{ fromMira ? t('fromMira') : t('fromUser') }}
    </div>
    <slot>
      <p class="mb-3xs">{{ t('typing') }}</p>
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
</style>