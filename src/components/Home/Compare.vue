<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Link } from '~/lib/constants/types'

gsap.registerPlugin(ScrollTrigger)
let ctx: gsap.Context
const container = ref<HTMLElement>()
const progress = ref(0)

const items = [{
  logo: '/logos/soracard.svg',
  alt: 'SORA Card',
  percent: 100
}, {
  logo: '/logos/crypto.svg',
  alt: 'Crypto.com',
  percent: 69
}, {
  logo: '/logos/revolut.svg',
  alt: 'Revolut',
  percent: 65
}, {
  logo: '/logos/choise.svg',
  alt: 'Choise.com',
  percent: 52
}]

onMounted(() => {
  if (container.value) {
    ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.value,
        start: 'top bottom',
        end: 'center center',
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

const { details } = defineProps<{
  details: (string | Link)[]
}>()
</script>

<template>
  <div class="rounded bg-light1 compare" ref="container" :style="`--progress: ${progress * 100 - 100}%`">
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.logo" :alt="item.alt" height="36">
        <div class="line rounded" :style="`--percent: ${item.percent}%`" />
      </div>
    </div>
    <div class="text-s article-link text-center">
      <template v-for="detail in details">
        <template v-if="typeof detail === 'string'">
          {{ detail }}
        </template>
        <NuxtLink v-else :href="detail.href" class="accent hover-deunderline">{{ detail.title }}</NuxtLink>
      </template>
    </div>
  </div>
</template>

<style scoped>
.compare {
  padding: var(--space-m) var(--space-s);
}

.items,
.item {
  display: grid;
  gap: var(--space-s);
}

.item img {
  height: 3.6rem;
  width: auto;
  display: block;
}

.line {
  height: 0.8rem;
  background-color: #ECECEE;
  overflow: hidden;
}

.line::after {
  content: '';
  display: block;
  width: var(--percent);
  height: 100%;
  background-color: var(--color-accent);
  border-radius: var(--radius);
  transform: translateX(var(--progress));
}

.article-link {
  padding-top: var(--space-s);
  margin-top: var(--space-m);
  border-top: 1px solid var(--color-semi-dark);
}

@media (min-width: 640px) {
  .compare {
    padding: var(--space-xl) var(--space-xl) var(--space-l);
  }

  .items,
  .item {
    gap: var(--space-m);
  }

  .item img {
    height: 4.8rem;
  }

  .line {
    height: 1rem;
  }

  .article-link {
    margin-top: var(--space-xl);
  }
}
</style>