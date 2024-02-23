<template>
  <section class="text-center w pt-3xl">
    <h1 class="mb-s text-3xl" data-aos="fade-up">The new era of interoperable finance starts here</h1>
    <p class="text-l mb-m" data-aos="fade-up" data-aos-delay="100">All in the palm of your hands</p>
    <Button href="#more" title="Learn more" large style="z-index: 2;" data-aos="fade-up" data-aos-delay="200" />
    <div class="hero" data-aos="fade-up" data-aos-delay="300">
      <IntegrationsHeroVisual class="mx-auto inner" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  z-index: -1;
  margin: -10% 0;
}

@media (max-width: 639px) {
  .hero {
    overflow: hidden;
    width: 100%;
    margin: -10% calc(-1 * var(--space-xs));
    width: calc(100% + var(--space-xs) * 2);
    position: relative;
    aspect-ratio: 10/13;
  }

  .hero>.inner {
    position: absolute;
    width: 130%;
    left: -15%;
  }
}
</style>