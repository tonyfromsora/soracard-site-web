<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
    <img src="/integrations/hero/1.jpg" alt="Demeter UI elements" class="shadow el1">
    <img src="/integrations/hero/2.jpg" alt="SORA Wallet app screen" class="r1 el2">
    <img src="/integrations/hero/3.jpg" alt="SORA Wallet UI elements" class="shadow r2 el3">
    <img src="/integrations/hero/4.jpg" alt="Polkaswap UI elements" class="shadow r2 el4">
    <img src="/integrations/hero/5.jpg" alt="Polkaswap UI elements" class="shadow r2 el5">
    <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="el6">
      <rect width="36" height="36" rx="18" fill="#9D8181" />
      <path d="M16 12L22 18L16 24" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    <img src="/integrations/hero/7.jpg" alt="Polkaswap UI elements" class="shadow r2 el7">
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" class="el8">
      <rect width="54" height="54" rx="27" fill="#FF005E" />
      <path
        d="M39.2261 33.223C40.8528 34.8496 40.8528 37.4936 39.2261 39.1202C37.5993 40.7468 34.9552 40.7468 33.3284 39.1202C31.7016 37.4936 28.3241 28.2192 28.3241 28.2192C28.3241 28.2192 37.5993 31.5963 39.2261 33.223Z"
        fill="white" />
      <path
        d="M25.887 28.2192C25.887 28.2192 22.5095 37.4884 20.8828 39.1202C19.256 40.7468 16.6119 40.7468 14.9851 39.1202C13.3584 37.4936 13.3584 34.8496 14.9851 33.223C16.6119 31.5963 25.887 28.2192 25.887 28.2192Z"
        fill="white" />
      <path
        d="M39.2261 14.8824C40.8528 16.509 40.8528 19.153 39.2261 20.7796C37.5993 22.4062 28.3241 25.7835 28.3241 25.7835C28.3241 25.7835 31.7016 16.5142 33.3284 14.8824C34.9603 13.2506 37.5993 13.2506 39.2261 14.8824Z"
        fill="white" />
      <path
        d="M20.8828 14.8824C22.5095 16.509 25.887 25.7835 25.887 25.7835C25.887 25.7835 16.617 22.4062 14.9851 20.7796C13.3584 19.153 13.3584 16.509 14.9851 14.8824C16.6119 13.2506 19.256 13.2506 20.8828 14.8824Z"
        fill="white" />
      <path
        d="M49.5141 27.0006C49.5141 29.3037 47.6497 31.1679 45.3464 31.1679C43.0431 31.1679 29.5022 27.0006 29.5022 27.0006C29.5022 27.0006 43.0431 22.8333 45.3464 22.8333C47.6497 22.8333 49.5141 24.6975 49.5141 27.0006Z"
        fill="white" />
      <path
        d="M24.4977 27.0006C24.4977 27.0006 10.9568 31.1679 8.65347 31.1679C6.35017 31.1679 4.48584 29.3037 4.48584 27.0006C4.48584 24.6975 6.35017 22.8333 8.65347 22.8333C10.9568 22.8333 24.4977 27.0006 24.4977 27.0006Z"
        fill="white" />
      <path
        d="M26.9967 49.5141C24.6934 49.5141 22.8291 47.6499 22.8291 45.3468C22.8291 43.0436 26.9967 29.5038 26.9967 29.5038C26.9967 29.5038 31.1644 43.0436 31.1644 45.3468C31.1644 47.6499 29.3 49.5141 26.9967 49.5141Z"
        fill="white" />
      <path
        d="M26.9967 24.4961C26.9967 24.4961 22.8291 10.9563 22.8291 8.65314C22.8291 6.35002 24.6934 4.48584 26.9967 4.48584C29.3 4.48584 31.1644 6.35002 31.1644 8.65314C31.1644 10.9563 26.9967 24.4961 26.9967 24.4961Z"
        fill="white" />
    </svg>
  </div>
</template>

<style scoped>
.visual {
  --max-width: 120rem;
  aspect-ratio: 1/1;
  position: relative;
  max-width: var(--max-width);
  width: 100%;
  background: radial-gradient(42.42% 42.42% at 42.42% 43.71%, rgba(255, 153, 110, 0.60) 0%, rgba(255, 153, 110, 0.00) 100%), radial-gradient(50% 50% at 50% 50%, #FAD7F9 0%, rgba(250, 215, 249, 0.00) 100%);
}

.visual>* {
  object-fit: cover;
  z-index: 1;
}

.visual>*,
.visual::before,
.visual::after {
  position: absolute;
  display: block;
}

.visual::before,
.visual::after {
  content: '';
  border-radius: calc(min(100vw, var(--max-width)) * 0.044);
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.3);
}

.visual::before {
  left: 25.1%;
  top: 26.4%;
  width: 30.9%;
  height: 37.7%;
}

.visual::after {
  top: 8.2%;
  left: 47.6%;
  width: 25.8%;
  height: 28%;
  transform: translateY(calc((var(--progress) - 0.5) * 0.1 * var(--max-width)));
}

.shadow {
  box-shadow: 0px 20px 70px 0px rgba(0, 0, 0, 0.10);
}

.r1 {
  border-radius: calc(min(100vw, var(--max-width)) * 0.03);
}

.r2 {
  border-radius: calc(min(100vw, var(--max-width)) * 0.022);
}

.el1 {
  left: 19.9%;
  top: 47%;
  width: 14%;
  border-radius: calc(min(100vw, var(--max-width)) * 0.015) 0 0 calc(min(100vw, var(--max-width)) * 0.015);
  transform: translateY(calc((var(--progress) - 0.5) * -0.1 * var(--max-width)));
}

.el2 {
  left: 33.4%;
  top: 16.1%;
  width: 33.1%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.2 * var(--max-width)));
}

.el3 {
  left: 53.8%;
  top: 53%;
  width: 24.9%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.3 * var(--max-width)));
}

.el4 {
  top: 41.1%;
  left: 45.7%;
  width: 20.5%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.5 * var(--max-width)));
}

.el5 {
  top: 41.1%;
  left: 66.9%;
  width: 20.5%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.5 * var(--max-width)));
}

.el6 {
  height: 2.8%;
  width: 2.8%;
  left: 65.2%;
  top: 47.3%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.5 * var(--max-width)));
}

.el7 {
  top: 68.9%;
  left: 22.2%;
  width: 21.9%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.4 * var(--max-width)));
}

.el8 {
  width: 4.2%;
  height: 4.2%;
  left: 31%;
  top: 66.7%;
  transform: translateY(calc((var(--progress) - 0.5) * -0.4 * var(--max-width)));
}
</style>