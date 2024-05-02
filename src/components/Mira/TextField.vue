<script setup lang="ts">
const { modelValue, disabled, button, placeholder } = defineProps<{ modelValue: string, disabled?: boolean, button: string, placeholder?: string }>()
defineEmits<{ 'update:modelValue': [value: string], 'submit': [modelValue: string] }>()
</script>

<template>
  <div class="grow-wrap" :data-value="modelValue">
    <textarea name="question" id="question" :placeholder="placeholder" rows="1" :value="modelValue" :disabled="disabled"
      @keypress="(e) => {
    if (e.key !== 'Enter' || e.shiftKey || e.ctrlKey || e.altKey || e.metaKey) return
    e.preventDefault()
    $emit('submit', modelValue)
  }" @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)" />
    <Button :title="button" @click="$emit('submit', modelValue)" :disabled="disabled || !modelValue.length" />
  </div>
</template>

<style scoped>
.grow-wrap {
  display: grid;
  grid-template-columns: 1fr auto;
  border-top: var(--border-width) solid currentColor;
  align-items: end;
  max-height: 16em;
  gap: var(--space-xxs);
}

.grow-wrap::after {
  content: attr(data-value) " ";
  white-space: pre-wrap;
  visibility: hidden;
}

.grow-wrap>textarea {
  resize: none;
  overflow: hidden;
  height: 100%;
}

.grow-wrap>textarea,
.grow-wrap::after {
  appearance: none;
  background-color: transparent;
  border: none;
  outline: none;
  padding: var(--space-xxs) 0;
  font: inherit;
  grid-area: 1 / 1 / 2 / 2;
  overflow-y: auto;
  word-break: break-word;
}
</style>