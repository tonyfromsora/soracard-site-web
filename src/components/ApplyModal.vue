<script setup lang="ts">
import en from '~/lib/lang/en/apply.json'
import be from '~/lib/lang/be/apply.json'

const { tm } = useI18n({
  messages: { en, be }
})

type Piece = { b: string } | string

const isApplyModalOpen = useApplyModalState()
</script>

<template>
  <Overlay :open="isApplyModalOpen" @click="isApplyModalOpen = false" data-cursor-show data-cursor-text="Close"
    :z-index="23" :opacity=".3" />
  <section class="apply-overlay text-s p-xs" :class="{ open: isApplyModalOpen }">
    <div class="text-s rounded p-xs bg-light1 text-center">
      <template v-for="item in (tm('apply.modalTitle') as Piece[])">
        <span v-if="typeof item === 'string'">{{ item }}</span>
        <b v-else>{{ item.b }}</b>
      </template>
    </div>
    <Apply />
  </section>
</template>

<style scoped>
.apply-overlay {
  position: fixed;
  top: 50%;
  right: 50%;
  display: grid;
  gap: 2px;
  z-index: 24;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1) translateX(45%) translateY(-45%);
  transition: transform 1s var(--ease), opacity 1s var(--ease), visibility 1s var(--ease);
  width: 100%;
  max-width: 56rem;
}

.apply-overlay.open {
  opacity: var(--opacity);
  visibility: visible;
  transform: scale(1) translateX(50%) translateY(-50%);
}
</style>