<script setup lang="ts">
import type { Link } from '~/lib/constants/types'
import type Button from '../Button.vue'

defineProps<{
  items: {
    label: string
    title: string
    contents: (string | Link)[][]
    button: Link | { title: string, modal: true }
    image: {
      src: string
      alt: string
    }
  }[]
}>()
const isApplyModalOpen = useApplyModalState()
</script>

<template>
  <section class="w pt-xl pb-3xl px-xs">
    <div v-for="item in items" class="item pb-3xl">
      <div class="text rich p-3xs" data-aos="fade-up">
        <span class="px-xs py-3xs bg-light1 rounded text-s">
          {{ item.label }}
        </span>
        <h2 class="mt-xs">
          {{ item.title }}
        </h2>
        <p v-for="p in item.contents">
          <template v-for="piece in p">
            <template v-if="typeof piece === 'string'">
              {{ piece }}
            </template>
            <template v-else>
              <a :href="piece.href" target="_blank">{{ piece.title }}</a>
            </template>
          </template>
        </p>
        <Button v-if="'modal' in item.button" :title="item.button.title" @click="isApplyModalOpen = true"
          class="text-s mt-xs" />
        <Button v-else :title="item.button.title" :href="item.button.href" class="text-s mt-xs" />
      </div>
      <IntegrationsProductVisual :image="item.image" class="visual" data-aos="fade-up" data-aos-delay="100" />
    </div>
  </section>
</template>

<style scoped>
.item {
  display: grid;
  gap: var(--space-m);
}

@media (min-width: 960px) {
  .item {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .item:nth-child(odd)>.text {
    padding-right: var(--space-xxl);
  }

  .item:nth-child(even)>.text {
    padding-left: var(--space-xxl);
    order: 2;
  }

  .visual {
    align-self: center;
  }
}
</style>