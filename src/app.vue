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

const i18nHead = useLocaleHead({
  addSeoAttributes: true
})
useHead(i18nHead)
</script>

<template>
  <NuxtLoadingIndicator color="var(--color-dark1)" />
  <Header />
  <NuxtPage />
  <Footer />
  <ApplyModal />
  <CookieBumper />
</template>
