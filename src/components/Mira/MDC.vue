<script setup lang="ts">
import markdownIt from 'markdown-it'

const { value } = defineProps<{
  value: string
}>()

const md = markdownIt()

// Remember the old renderer if overridden, or proxy to the default renderer.
const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // Add a new `target` attribute, or replace the value of the existing one.
  tokens[idx].attrSet('target', '_blank')

  // Pass the token to the default renderer.
  return defaultRender(tokens, idx, options, env, self)
}

const html = computed(() => md.render(value))
</script>

<template>
  <div class="mira rich" v-html="html" />
</template>