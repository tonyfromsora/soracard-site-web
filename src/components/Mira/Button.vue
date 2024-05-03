<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <button class="button bold text-center inline-block" style="--color: var(--color-dark1)">
    <video src="/mira.mp4" autoplay loop muted playsinline class="avatar" />
    <span :data-title="title">{{ title }}</span>
  </button>
</template>

<style scoped>
.button {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 1s var(--ease);
  display: flex;
  gap: var(--space-xxs);
  align-items: center;
}

.avatar {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-dark1);
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

@media (hover:hover) {
  .button:hover>span::before {
    transform: translateY(-100%) scaleY(0.5);
  }

  .button:hover>span::after {
    transform: translateY(0);
  }
}
</style>