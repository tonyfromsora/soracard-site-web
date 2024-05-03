<script setup lang="ts">
defineProps<{ questions: string[] }>()
defineEmits<{ 'question': [value: string] }>()
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