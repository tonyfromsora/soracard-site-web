<script setup lang="ts">
const title = 'SORA Card | Value Freedom — Blog'
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
})
</script>

<template>
  <h1 class="text-3xl w text-center pt-3xl pb-xl" data-aos="fade-up">Blog</h1>
  <BlogList accent data-aos="fade-up" data-aos-delay="200" />
</template>