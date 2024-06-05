<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import en from '~/lib/lang/en/accordion.json'
import es from '~/lib/lang/es/accordion.json'

const { t } = useI18n({
  messages: { en, es }
})

const { items } = defineProps<{
  items: {
    title: string,
    content: (string | Link)[]
  }[]
}>()
const activeItem = ref<number>()

const toggleAccordion = (i: number) => {
  if (activeItem.value === i) {
    activeItem.value = undefined
  } else {
    activeItem.value = i
  }
}
</script>

<template>
  <div>
    <div v-for="(item, i) in items" :key="i" class="item" :class="{ open: i === activeItem }">
      <h3 @click="toggleAccordion(i)" class="text-m py-s hover-trigger" data-cursor-show
        :data-cursor-text="i === activeItem ? t('close') : t('open')">
        <span>
          {{ item.title }}
        </span>
        <div class="icon">
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </h3>
      <div class="content">
        <div>
          <div class="pb-l pt-xs inner">
            <RichText :content="item.content" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  border-top: 1px solid var(--color-semi-dark);
  position: relative;
}

.icon {
  width: 1.6rem;
  height: 1.6rem;
  position: relative;
}

.icon>.line {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  height: 0.3rem;
  width: 100%;
  margin: -0.15rem 0;
  transition: transform 1s var(--ease);
  overflow: hidden;
  border-radius: 1rem;
}

.line::after,
.line::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: currentColor;
  transition: transform 1.5s var(--ease);
}

.item:not(.open) .line:nth-child(1)::before,
.item:not(.open) .line:nth-child(1)::after {
  transition-delay: 0.15s;
}

.line::after {
  transform: translateX(-200%);
}

.hover-trigger:hover .line::before {
  transform: translateX(200%);
}

.hover-trigger:hover .line::after {
  transform: translateX(0);
}

.item:not(.open)>h3 .icon>.line:nth-child(1) {
  transform: rotate(90deg);
}

.item:not(.open)>h3 .icon>.line:nth-child(2) {
  transform: rotate(180deg);
}

.item>h3 {
  display: grid;
  gap: var(--space-xs);
  grid-template-columns: 1fr auto;
  align-items: center;
  cursor: pointer;
}

.content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 1s var(--ease);
  overflow: hidden;
  min-height: 0;
}

.content>div {
  min-height: 0;
}

.item.open .content {
  grid-template-rows: 1fr;
}

.inner {
  transform: translateY(var(--space-l));
  opacity: 0;
  transition: transform 1s var(--ease), opacity 1s var(--ease);
}

.item.open .inner {
  opacity: 1;
  transform: translateY(0);
}
</style>