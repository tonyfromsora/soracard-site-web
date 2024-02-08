<script setup lang="ts">
const isModalOpen = useApplyModalState()
</script>

<template>
  <section class="w container pb-xxl">
    <div class="grid rounded bg-dark1 light1">
      <div class="text">
        <h2 class="mb-m">Get SORA Card — Value Freedom</h2>
        <p class="text-l mb-l">
          SORA card is a neobanking-style solution that gives direct access to decentralized and non-custodial crypto.
          SORA does not have access to your crypto assets or user data. We value freedom.
        </p>
        <Button title="Apply now" large light @click="isModalOpen = !isModalOpen" />
      </div>
      <div class="image">
        <img src="/home/banner.jpg" alt="Hand holding SORA Card" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.text {
  padding: var(--space-m) var(--space-s);
}

.grid {
  overflow: hidden;
  display: grid;
}

.image {
  aspect-ratio: 1/1;
  position: relative;
}

.image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 640px) {
  .text {
    align-self: center;
    padding: var(--space-xl);
  }

  .container {
    padding-top: var(--space-xl);
  }
}

@media (min-width: 960px) {
  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .image {
    height: 100%;
  }
}
</style>