<script setup lang="ts">
import en from '~/lib/lang/en/fees.json'
import es from '~/lib/lang/es/fees.json'
</script>

<template>
  <FeesPage :messages="{ en, es }" />
</template>