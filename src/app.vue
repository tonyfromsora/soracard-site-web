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
    visible: false,
  })
})
onBeforeUnmount(() => cursor?.destroy())
router.afterEach(() => {
  cursor?.removeText()
  cursor?.hide()
})
</script>

<template>
  <Header />
  <NuxtPage />
  <Footer />
  <ApplyModal />
  <CookieBumper />
</template>
