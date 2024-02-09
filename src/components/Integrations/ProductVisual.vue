<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const { image } = defineProps<{ image: { src: string, alt: string } }>()

gsap.registerPlugin(ScrollTrigger)
let ctx: gsap.Context
const container = ref<HTMLElement>()
const progress = ref(0)

onMounted(() => {
  if (container.value) {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (val) => {
          gsap.to(progress, { value: val.progress, ease: 'power4.out', duration: .5 })
        }
      })
    }, container.value)
  }
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <div class="visual" ref="container" :style="`--progress: ${progress}`">
    <img :src="image.src" :alt="image.alt" class="back">
    <img src="/home/value.jpg" alt="SORA Card" class="front">
  </div>
</template>

<style scoped>
.visual {
  position: relative;
  aspect-ratio: 5/4;
}

.back {
  transform: translateY(calc(var(--progress) * -10%));
}

.front {
  position: absolute;
  right: 0;
  bottom: 15%;
  width: 40%;
  transform: translateY(calc(var(--progress) * 40%));
  border-radius: min(2rem, 2vw);
  box-shadow: 0px 20px 70px 0px rgba(0, 0, 0, 0.15);
}
</style>