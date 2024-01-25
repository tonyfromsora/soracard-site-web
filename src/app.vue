<script setup lang="ts">
import MouseFollower from "mouse-follower"
import gsap from "gsap"
const router = useRouter()

MouseFollower.registerGSAP(gsap)
let cursor: MouseFollower

onMounted(() => {
  cursor = new MouseFollower({
    skewing: 2,
    stickDelta: 0.25,
  })
})
onBeforeUnmount(() => cursor?.destroy())
router.afterEach(() => {
  cursor?.removeText()
})
</script>

<template>
  <Header />
  <NuxtPage />
</template>
