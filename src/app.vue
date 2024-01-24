<script setup lang="ts">
import MouseFollower from "mouse-follower"
import gsap from "gsap"

MouseFollower.registerGSAP(gsap)
let cursor: MouseFollower

onMounted(() => {
  cursor = new MouseFollower({
    skewing: 2,
    stickDelta: 0.25,
  })
})
onBeforeUnmount(() => cursor?.destroy())
</script>

<template>
  <Header />
  <NuxtPage />
</template>
