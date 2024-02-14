<script setup lang="ts">
const { id, cover } = defineProps<{ id: string, cover: string }>()

const play = ref(false)
</script>

<template>
  <div class="block rounded bg-dark2" :class="{ play }">
    <img :src="cover" alt="Video cover" @click="play = true" data-cursor-show data-cursor-text="Play">
    <iframe v-if="play" width="1920" height="1080" :src="`https://www.youtube.com/embed/${id}?autoplay=1`"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.block {
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  background-color: var(--color-dark1);
}

.block img,
.block iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
}

.block img {
  cursor: pointer;
  transition: opacity 1s var(--ease), transform 1s var(--ease), visibility 1s var(--ease);
}

.block.play img,
.block.play::after {
  opacity: 0;
  visibility: hidden;
}

.block::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10rem;
  height: 10rem;
  margin: -5rem;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIHJ4PSI2MCIgZmlsbD0iIzIxMjEyMSIvPgo8cGF0aCBkPSJNNzcgNTguMjY3OUM3OC4zMzMzIDU5LjAzNzcgNzguMzMzMyA2MC45NjIzIDc3IDYxLjczMjFMNTMgNzUuNTg4NUM1MS42NjY3IDc2LjM1ODMgNTAgNzUuMzk2IDUwIDczLjg1NjRMNTAgNDYuMTQzNkM1MCA0NC42MDQgNTEuNjY2NyA0My42NDE3IDUzIDQ0LjQxMTVMNzcgNTguMjY3OVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==");
  transition: opacity 1s var(--ease), transform 1s var(--ease), visibility 1s var(--ease);
  pointer-events: none;
}

@media (hover:hover) {

  .block:hover::after,
  .block.play::after {
    transform: scale(0.9);
  }

  .block:hover img {
    transform: scale(1.02);
  }
}
</style>