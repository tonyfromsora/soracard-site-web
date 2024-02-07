<script setup lang="ts">
const { scrollY } = useScroll()
</script>

<template>
  <section class="py-3xl w container">
    <h1 class="text-3xl mb-m">More than just a card</h1>
    <p class="text-l dark2 mb-l">Access the new era of interoperable finance, all in the palm of your hands.</p>
    <div class="flex">
      <Button title="Apply" href="" large />
      <Button title="Learn more" href="#features" ghost large />
    </div>
    <div class="image">
      <picture :style="`--progress: ${Math.min(1, scrollY * 0.001)};`">
        <source srcset="/home/hero.webp" type="image/webp" />
        <img src="/home/hero.png" alt="Hand holding phone with SORA Card in wallet app" />
      </picture>
    </div>
    <div class="chains">
      <svg viewBox="0 0 221 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.7475 61.4C19.9336 63.8 24.9169 65 30.0997 65C35.2824 65 40.0664 63.6 44.4518 61.4L30.0997 40L15.7475 61.4ZM30.0997 5C13.3555 5 0 18.4 0 35C0 44.8 4.38538 53.2 11.5615 58.8L27.5083 35H11.7608V30H27.7076V25H11.7608V20H48.4385V25H32.4917V30H48.4385V35H32.4917L48.4385 58.8C55.6146 53.2 60 44.8 60 35C60 18.4 46.4452 5 30.0997 5Z"
          fill="#EE1122" />
        <path d="M112.118 69.6154V52.2462L90.6311 39.6812L112.118 69.6154Z" fill="#F0CDC2" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path d="M112.189 69.6154V52.2462L133.675 39.6812L112.189 69.6154Z" fill="#C9B3F5" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path d="M112.118 47.9288V25.761L90.3848 35.4927L112.118 47.9288Z" fill="#88AAF1" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path d="M112.189 47.9288V25.761L133.922 35.4927L112.189 47.9288Z" fill="#C9B3F5" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path d="M90.3848 35.4927L112.118 0.384613V25.761L90.3848 35.4927Z" fill="#F0CDC2" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path d="M133.922 35.4927L112.189 0.384613V25.761L133.922 35.4927Z" fill="#B8FAF6" stroke="#1616B4"
          stroke-width="0.384615" stroke-linejoin="round" />
        <path
          d="M192.443 17.5854C198.419 17.5854 203.263 14.7681 203.263 11.2927C203.263 7.81735 198.419 5 192.443 5C186.468 5 181.624 7.81735 181.624 11.2927C181.624 14.7681 186.468 17.5854 192.443 17.5854Z"
          fill="#E6007A" />
        <path
          d="M192.443 65C198.419 65 203.263 62.1827 203.263 58.7073C203.263 55.2319 198.419 52.4146 192.443 52.4146C186.468 52.4146 181.624 55.2319 181.624 58.7073C181.624 62.1827 186.468 65 192.443 65Z"
          fill="#E6007A" />
        <path
          d="M177.365 26.2961C180.353 21.1212 180.334 15.5165 177.322 13.7777C174.31 12.0388 169.447 14.8242 166.459 19.9991C163.471 25.1739 163.491 30.7786 166.502 32.5175C169.514 34.2563 174.378 31.4709 177.365 26.2961Z"
          fill="#E6007A" />
        <path
          d="M218.423 50.0005C221.411 44.8257 221.393 39.2219 218.383 37.4843C215.374 35.7466 210.512 38.5329 207.524 43.7078C204.536 48.8826 204.554 54.4864 207.564 56.2241C210.573 57.9617 215.435 55.1754 218.423 50.0005Z"
          fill="#E6007A" />
        <path
          d="M177.323 56.2226C180.335 54.4837 180.355 48.8791 177.367 43.7042C174.379 38.5294 169.515 35.744 166.504 37.4828C163.492 39.2217 163.473 44.8264 166.46 50.0012C169.448 55.1761 174.312 57.9615 177.323 56.2226Z"
          fill="#E6007A" />
        <path
          d="M218.386 32.5189C221.396 30.7812 221.413 25.1774 218.426 20.0026C215.438 14.8277 210.576 12.0414 207.566 13.7791C204.557 15.5168 204.539 21.1205 207.527 26.2953C210.514 31.4702 215.376 34.2565 218.386 32.5189Z"
          fill="#E6007A" />
      </svg>
      <p class="text-s">
        Your fiat gateway to crypto
      </p>
    </div>
  </section>
  <HomeBackground class="bg" :style="`--opacity: ${Math.max(0, 1 - scrollY * 0.0005)};`" />
</template>

<style scoped>
.image {
  position: relative;
  z-index: -1;
  overflow: hidden;
}

.image picture {
  position: absolute;
}

.chains {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  flex-direction: column;
}

.chains svg {
  display: block;
  height: 5rem;
}

.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
  display: block;
  opacity: var(--opacity);
}

@media (max-width: 639px) {
  .image {
    margin: var(--space-xl) calc(-1 * var(--space-xs)) calc(-1 * var(--space-l));
  }
}

@media (min-width: 640px) and (max-width: 959px) {
  .image {
    margin: var(--space-xl) calc(-1 * var(--space-s)) calc(-1 * var(--space-l));
  }
}

@media (max-width: 959px) {
  .image {
    aspect-ratio: 25/32;
  }

  .image picture {
    top: 0;
    left: 21%;
    width: 90%;
  }
}

@media (min-width: 960px) {
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .container>*:not(.image) {
    padding-right: 50%;
  }

  .image {
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
  }

  .image picture,
  .image img {
    top: 11%;
    min-height: 100rem;
    height: 108%;
    max-height: 150%;
    left: 5%;
    width: 110%;
    object-fit: contain;
    object-position: center;
  }

  .image picture {
    transform-origin: bottom right;
    transform: translateY(calc(var(--progress) * -40%)) translateX(calc(var(--progress) * 10%)) rotate(calc(var(--progress) * 20deg));
    opacity: calc(1 - var(--progress));
  }

  .chains {
    flex-direction: row;
    gap: var(--space-m);
    margin-top: var(--space-xl);
  }

  .chains svg {
    display: block;
    height: 7rem;
  }
}
</style>