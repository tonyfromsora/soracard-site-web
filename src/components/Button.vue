<script setup lang="ts">
const { title, href, target, ghost = false } = defineProps<{
  title: string,
  href?: string,
  target?: "_blank" | "_parent" | "_self" | "_top"
  ghost?: boolean
  large?: boolean
  light?: boolean
}>()

const component = computed(() => {
  if (href) return resolveComponent('NuxtLink')
  return 'button'
})
</script>

<template>
  <component class="button bold text-center inline-block" :is="component" :href="href" :target="target"
    :class="{ outlined: !ghost, 'px-s': !large, 'py-xxs': !large, 'px-m': large, 'py-xs': large }"
    :style="`--color: ${light ? 'var(--color-light1)' : 'var(--color-dark1)'}`">
    <span :data-title="title">{{ title }}</span>
  </component>
</template>

<style scoped>
.button {
  border-radius: 10rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 1s var(--ease);
}

.button.outlined {
  box-shadow: inset 0 0 0 2px var(--color);
}

.button::before {
  content: '';
  top: -5%;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: var(--color);
  border-radius: 50%;
  transform: translateY(101%);
  transition: transform 1s var(--ease), border-radius 1s var(--ease), background-color 1s var(--ease);
}

.button>span {
  overflow: hidden;
  color: transparent;
  position: relative;
  display: block;
  z-index: 2;
}

.button>span::before,
.button>span::after {
  content: attr(data-title);
  position: absolute;
  top: 0;
  left: 0;
  color: var(--color-light1);
  transition: transform 1s var(--ease);
}

.button>span::before {
  color: var(--color);
}

.button>span::after {
  color: var(--color);
  transform: translateY(100%) scaleY(0.5);
}

.button.outlined>span::after {
  color: var(--color-light1);
}

@media (hover:hover) {
  .button:hover {
    transform: translateY(0) scale(1.02);
  }

  .button.outlined:hover {
    box-shadow: inset 0 0 0 2px var(--color-accent);
    transition: transform .6s cubic-bezier(.3, 6, .6, 1), box-shadow 1s var(--ease);
  }

  .button.outlined:hover::before {
    transform: translateY(0);
    border-radius: 0;
    background-color: var(--color-accent);
  }

  .button:hover>span::before {
    transform: translateY(-100%) scaleY(0.5);
  }

  .button:hover>span::after {
    transform: translateY(0);
  }
}
</style>