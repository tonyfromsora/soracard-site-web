<script setup lang="ts">
import type { RichTextElement } from '~/lib/constants/types'
defineProps<{ content: RichTextElement[] }>()
const localePath = useLocalePath()
</script>

<template>
  <template v-for="piece in content">
    <template v-if="typeof piece === 'string'">{{ piece }}</template>
    <template v-else-if="'b' in piece">
      <strong>{{ piece.b }}</strong>
    </template>
    <template v-else-if="'external' in piece || piece.href.startsWith('https://')">
      <a :href="piece.href" target="_blank" class="hover-underline accent">{{ piece.title }}</a>
    </template>
    <template v-else>
      <NuxtLink :to="localePath(piece.href)" class="hover-underline accent">{{ piece.title }}</NuxtLink>
    </template>
  </template>
</template>