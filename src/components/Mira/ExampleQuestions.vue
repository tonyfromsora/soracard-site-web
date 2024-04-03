<script setup lang="ts">
defineEmits<{ 'question': [value: string] }>()

const questions = [
  'What is SORA?',
  'What is SORA Card?',
  'How to apply for SORA Card?'
]
</script>

<template>
  <div class="buttons">
    <button v-for="question in questions" class="rounded bg-light1 px-s py-xs hover-trigger"
      @click="$emit('question', question)">
      <span class="hover-underline">
        {{ question }}
      </span>
    </button>
  </div>
</template>

<style scoped>
.buttons {
  display: grid;
  gap: 2px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
</style>