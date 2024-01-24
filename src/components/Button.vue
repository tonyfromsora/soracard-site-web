<script setup lang="ts">
const { title, href, target } = defineProps<{
  title: string,
  href: string,
  target?: "_blank" | "_parent" | "_self" | "_top"
}>()
</script>

<template>
  <NuxtLink class="button px-s py-xxs bold text-center" :href="href" :target="target">
    <span :data-title="title">{{ title }}</span>
  </NuxtLink>
</template>

<style scoped>
.button {
  border-radius: 10rem;
  box-shadow: inset 0 0 0 2px var(--color-dark1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 1s var(--ease);
}

.button>span {
  overflow: hidden;
  color: transparent;
  position: relative;
  display: block;
}

.button>span::before,
.button>span::after {
  content: attr(data-title);
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-light1);
  transition: transform 0.75s var(--ease);
}

.button>span::before {
  color: var(--color-dark1);
}

.button>span::after {
  color: var(--color-light1);
  transform: translateY(100%) scaleY(0.5);
}

.button::before {
  content: '';
  top: -5%;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: var(--color-dark1);
  border-radius: 50%;
  transform: translateY(100%);
  transition: transform 1s var(--ease), border-radius 1s var(--ease), background-color 1s var(--ease);
  z-index: -1;
}

@media (hover:hover) {
  .button:hover {
    transform: translateY(0) scale(1.02);
    box-shadow: inset 0 0 0 2px var(--color-accent);
    transition: transform .6s cubic-bezier(.3, 6, .6, 1), box-shadow 1s var(--ease);
  }

  .button:hover>span::before {
    transform: translateY(-100%) scaleY(0.5);
  }

  .button:hover>span::after {
    transform: translateY(0);
  }

  .button:hover::before {
    transform: translateY(0);
    border-radius: 0;
    background-color: var(--color-accent);
  }
}
</style>