<script setup lang="ts">
import { type QAFeedItem } from '~/lib/constants/types'
const { question, answer = [], links } = defineProps<QAFeedItem>()
const state = ref<'links' | 'wrong' | undefined>(undefined)
</script>

<template>
  <div class="controls text-xs dark2">
    <button v-if="links && links.length" class="flex aic hover-trigger py-3xs"
      @click="state = state === 'links' ? undefined : 'links'" :class="{ expanded: state === 'links' }">
      <MiraPlus :expanded="state === 'links'" class="mr-3xs" />
      <span class="hover-underline">Links</span>
    </button>
    <template v-else> </template>
    <button class=" hover-trigger py-3xs" @click="state = state === 'wrong' ? undefined : 'wrong'">
      <span class="hover-underline">Wrong answer?</span>
    </button>
  </div>
  <MiraReport v-if="state === 'wrong'" :question="question" :answer="answer" />
  <div v-if="state === 'links'" class="links pt-xxs pb-xs">
    <a v-for="link in links" :href="link.href" class="hover-trigger" target="_blank">
      <span class="mr-3xs">•</span>
      <span class="hover-deunderline">{{ link.title }}</span>
    </a>
  </div>
</template>

<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: var(--space-xxs);
  margin-top: var(--space-s);
}

.links {
  display: grid;
  gap: var(--space-xxs);
}

.links>a {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  justify-self: start;
  max-width: 100%;
}
</style>