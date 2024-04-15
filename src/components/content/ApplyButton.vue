<script setup lang="ts">
const isModalOpen = useApplyModalState()
</script>

<template>
  <button class="hover-trigger accent" @click="isModalOpen = true">
    <span class="hover-underline">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
  </button>
</template>