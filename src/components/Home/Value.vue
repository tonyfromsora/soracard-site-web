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
          gsap.to(progress, { value: val.progress, ease: 'power4.out', duration: 1 })
        }
      })
    }, container.value)
  }
})

onUnmounted(() => {
  ctx?.revert()
})

const { label, title, items } = defineProps<{
  label: string
  title: string
  items: { icon: string; title: string; description: string }[]
}>()
</script>

<template>
  <section class="container w px-s" ref="container">
    <div class="text" data-aos="fade-up">
      <div class="accent bold mb-xxs">
        {{ label }}
      </div>
      <h2 class="mb-l">
        {{ title }}
      </h2>
      <div class="features">
        <div v-for="feature in items">
          <h3 class="text-m mb-xxs feature-title">
            <div class="icon mr-3xs">
              <img :src="`/icons/${feature.icon}.svg`" :alt="`${feature.icon} icon`">
            </div>
            {{ feature.title }}
          </h3>
          <p class="text-s">{{ feature.description }}</p>
        </div>
      </div>
    </div>
    <div class="image" :style="`--progess: ${progress}`" data-aos="fade-up" data-aos-delay="100">
      <img src="/home/value.jpg" alt="SORA Card">
      <img src="/home/value.jpg" alt="SORA Card">
      <img src="/home/value.jpg" alt="SORA Card">
    </div>
  </section>
</template>

<style scoped>
.container {
  padding-bottom: var(--space-xxl);
  display: grid;
  gap: var(--space-s);
}

.features {
  display: grid;
  gap: var(--space-s);
}

.icon {
  display: inline-flex;
  width: 4rem;
  height: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--color-light1);
}

.icon img {
  width: 3rem;
  height: 3rem;
}

.feature-title {
  display: flex;
  align-items: center;
}

.image {
  position: relative;
}

.image img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 46%;
  border-radius: min(2.4rem, 2.4vw);
  transform: translateX(-50%) translateY(-50%) rotateZ(40deg) rotateY(30deg) rotateX(-30deg);
  box-shadow: 9vw 8vw 8vw -0.2vw rgba(0, 0, 0, 0.1), 0.45vw 0.4vw 0px 0px #B30115;
}

.image img:nth-child(3) {
  transform: translateX(-50%) translateY(calc(-25% * var(--progess) - 52%)) rotateZ(40deg) rotateY(30deg) rotateX(-30deg);
}

.image img:nth-child(1) {
  transform: translateX(-50%) translateY(calc(25% * var(--progess) - 48%)) rotateZ(40deg) rotateY(30deg) rotateX(-30deg);
}

@media (max-width: 959px) {
  .image {
    aspect-ratio: 1/1;
  }
}

@media (min-width: 640px) {
  .container {
    padding-top: var(--space-xxl);
  }

  .features {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-l) var(--space-s);
  }
}

@media (min-width: 960px) {
  .container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .image img {
    border-radius: min(2.4rem, 1.2vw);
    box-shadow: min(5vw, 5rem) min(4vw, 4rem) min(4vw, 4rem) max(-0.1vw, -0.1rem) rgba(0, 0, 0, 0.1), min(0.3vw, 0.3rem) min(0.25vw, 0.25rem) 0px 0px #B30115;
  }
}
</style>