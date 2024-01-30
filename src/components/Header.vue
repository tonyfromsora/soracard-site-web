<script setup lang="ts">
import { useScroll } from '~/composables/useScroll'
const { scrollY, isScrollDown } = useScroll()
const router = useRouter()

const isOpen = ref(false)

router.afterEach(() => isOpen.value = false)
</script>

<template>
  <Overlay :open="isOpen" @click="isOpen = false" />

  <header class="topbar text-s" :class="{ open: isOpen, 'with-bg': scrollY > 10, hidden: isScrollDown, }">
    <NuxtLink to="/" data-cursor-show data-cursor-text="Home">
      <svg viewBox="0 0 184 32" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo">
        <path
          d="M7.9 29.2C10 30.4 12.5 31 15.1 31C17.7 31 20.1 30.3 22.3 29.2L15.1 18.5L7.9 29.2ZM15.1 1C6.7 1 0 7.7 0 16C0 20.9 2.2 25.1 5.8 27.9L13.8 16H5.9V13.5H13.9V11H5.9V8.5H24.3V11H16.3V13.5H24.3V16H16.3L24.3 27.9C27.9 25.1 30.1 20.9 30.1 16C30.1 7.7 23.3 1 15.1 1ZM45.9 14.7L44.1 14.6C42.1 14.5 41.2 13.4 41.2 12.1C41.2 10.5 42.4 9.1 44.8 9.1C47.3 9.1 48.4 10.6 48.4 12.2H51.7C51.7 8.5 48.9 6.1 44.7 6.1C40.6 6.1 37.8 8.4 37.8 12C37.8 15.2 40 17.2 43.7 17.5L45.5 17.6C48 17.8 49.2 18.7 49.2 20.1C49.2 21.8 47.8 23.2 44.9 23.2C41.6 23.2 40.5 21.5 40.5 19.9H37.2C37.2 23.5 40 26.1 45 26.1C49.6 26.1 52.7 23.6 52.7 20C52.7 16.9 50 15.1 45.9 14.7ZM75.9 15.9V16.5C75.9 20.8 72.7 26.4 65.8 26.4C58.8 26.4 55.7 20.8 55.7 16.5V15.9C55.7 11.3 59 6.1 65.8 6.1C72.5 6.1 75.9 11.3 75.9 15.9ZM72.4 16.2C72.4 12.3 69.9 9.2 65.8 9.2C61.7 9.2 59.1 12.2 59.1 16.2C59.1 19.9 61.6 23.2 65.8 23.2C69.9 23.2 72.4 20 72.4 16.2ZM90.9 18.8L96.1 25.9H92.3L87.6 19.4H87.4H83.9V25.9H80.5V6.6H87.3C91.8 6.6 94.6 8.6 94.6 12.8V13.2C94.6 16.1 93.3 18 90.9 18.8ZM91.4 13C91.4 10.9 90 9.5 87.8 9.5H84V16.5H87.9C90.1 16.5 91.4 15.1 91.4 13ZM110.1 6.7L116.9 25.8H113.4L111.6 20.5H103L101.2 25.8H97.8L104.5 6.7H110.1ZM110.7 17.7L107.9 9.6H107L104.2 17.7H110.7Z"
          fill="#EE1122" />
        <path
          d="M139.8 18.9H141.7C141.5 20.1 141.1 21.3 140.4 22.3C139.7 23.3 138.8 24.1 137.6 24.7C136.4 25.3 135.1 25.6 133.4 25.6C131.8 25.6 130.4 25.3 129.2 24.7C128 24.1 127.1 23.4 126.4 22.4C125.7 21.5 125.1 20.5 124.8 19.4C124.5 18.3 124.3 17.2 124.3 16.2V15.7C124.3 14.6 124.5 13.5 124.8 12.4C125.1 11.3 125.7 10.3 126.4 9.39999C127.1 8.49999 128.1 7.79999 129.2 7.19999C130.3 6.69999 131.7 6.39999 133.2 6.39999C134.8 6.39999 136.1 6.69999 137.3 7.19999C138.4 7.69999 139.4 8.49999 140 9.49999C140.7 10.5 141.1 11.7 141.2 13H139.3C139.2 11.9 138.8 11 138.3 10.3C137.7 9.59999 137 8.99999 136.1 8.69999C135.2 8.29999 134.3 8.19999 133.2 8.19999C132.1 8.19999 131 8.39999 130.2 8.79999C129.3 9.19999 128.6 9.79999 128 10.5C127.4 11.2 127 12.1 126.7 13C126.4 13.9 126.3 14.9 126.3 16C126.3 17 126.4 18 126.7 18.9C127 19.8 127.4 20.7 128 21.4C128.6 22.1 129.3 22.7 130.2 23.1C131.1 23.5 132.1 23.7 133.3 23.7C135 23.7 136.4 23.3 137.5 22.4C138.8 21.7 139.5 20.5 139.8 18.9ZM154.5 13.8C154.9 14.5 155.1 15.4 155.1 16.6V25.1H153.6V22.4C153.5 22.8 153.3 23.1 153.1 23.5C152.7 24.2 152.2 24.7 151.5 25C150.8 25.3 150 25.5 149.1 25.5C148.2 25.5 147.3 25.3 146.6 25C145.9 24.7 145.3 24.2 144.9 23.6C144.5 23 144.3 22.2 144.3 21.3C144.3 20.4 144.5 19.7 144.9 19.1C145.3 18.5 145.9 18 146.7 17.7C147.5 17.4 148.4 17.2 149.5 17.2H153.2V16.6C153.2 15.6 152.9 14.9 152.4 14.3C151.9 13.8 151.1 13.5 150 13.5C149.5 13.5 149 13.5 148.5 13.5C148 13.5 147.5 13.5 147.1 13.6C146.6 13.6 146.2 13.7 145.9 13.7V12.1C146.3 12.1 146.6 12 147 12C147.4 12 147.8 11.9 148.2 11.9C148.6 11.9 149 11.9 149.4 11.9C150.7 11.9 151.8 12.1 152.7 12.4C153.6 12.6 154.2 13.1 154.5 13.8ZM153.3 20.3V18.6H149.5C148.5 18.6 147.6 18.9 147.1 19.4C146.5 19.9 146.3 20.6 146.3 21.4C146.3 22.2 146.6 22.9 147.2 23.4C147.8 23.9 148.6 24.1 149.6 24.1C150.2 24.1 150.8 24 151.4 23.8C152 23.6 152.4 23.2 152.8 22.7C153.1 22 153.3 21.2 153.3 20.3ZM162.4 13.2C161.8 13.8 161.5 14.7 161.3 15.8V12H159.8V25.2H161.7V17.9C161.7 16.5 162.1 15.4 162.8 14.6C163.5 13.9 164.6 13.5 166.1 13.5H166.9V11.8H166.5C164.6 11.8 163.3 12.2 162.4 13.2ZM182 6.89999V25.1H180.5V22C180.4 22.2 180.4 22.5 180.2 22.7C179.7 23.6 179 24.3 178.1 24.8C177.2 25.3 176.2 25.5 175.2 25.5C174.2 25.5 173.4 25.3 172.6 25C171.8 24.6 171.1 24.1 170.6 23.5C170 22.9 169.6 22.1 169.3 21.3C169 20.5 168.8 19.6 168.8 18.7V18.4C168.8 17.5 169 16.6 169.2 15.8C169.4 15 169.9 14.2 170.5 13.6C171.1 13 171.7 12.5 172.5 12.1C173.3 11.7 174.2 11.5 175.2 11.5C176.3 11.5 177.3 11.7 178.1 12.2C178.9 12.7 179.6 13.4 180.1 14.3V6.89999H182ZM180.2 17.8C180.2 16.9 180 16 179.6 15.3C179.2 14.6 178.6 14 177.9 13.6C177.2 13.2 176.4 13 175.4 13C174.4 13 173.6 13.2 172.8 13.7C172.1 14.2 171.5 14.8 171.1 15.6C170.7 16.4 170.5 17.3 170.5 18.3C170.5 19.3 170.7 20.3 171.1 21.1C171.5 21.9 172.1 22.6 172.8 23C173.5 23.5 174.4 23.7 175.3 23.7C176.2 23.7 177 23.5 177.7 23.1C178.4 22.7 179 22.1 179.4 21.4C179.8 20.7 180 19.8 180 18.8V17.8H180.2Z"
          fill="#212121" />
      </svg>

    </NuxtLink>

    <div class="nav">
      <HeaderNav />
      <div class="cta">
        <Button href="https://soracard.com/fees" target="_blank" title="Fees" ghost />
        <Button href="/" title="Apply" />
      </div>
    </div>

    <Burger :open="isOpen" @click="isOpen = !isOpen" class="burger" />
  </header>
</template>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-xs);
  z-index: 13;
  perspective: 200rem;
  transition: opacity .5s ease, transform .5s ease;
}

.topbar::before {
  content: '';
  background-image: linear-gradient(to bottom,
      hsl(216, 20%, 95.1%) 0%,
      hsla(216, 20%, 95.1%, 0.987) 8.1%,
      hsla(216, 20%, 95.1%, 0.951) 15.5%,
      hsla(216, 20%, 95.1%, 0.896) 22.5%,
      hsla(216, 20%, 95.1%, 0.825) 29%,
      hsla(216, 20%, 95.1%, 0.741) 35.3%,
      hsla(216, 20%, 95.1%, 0.648) 41.2%,
      hsla(216, 20%, 95.1%, 0.55) 47.1%,
      hsla(216, 20%, 95.1%, 0.45) 52.9%,
      hsla(216, 20%, 95.1%, 0.352) 58.8%,
      hsla(216, 20%, 95.1%, 0.259) 64.7%,
      hsla(216, 20%, 95.1%, 0.175) 71%,
      hsla(216, 20%, 95.1%, 0.104) 77.5%,
      hsla(216, 20%, 95.1%, 0.049) 84.5%,
      hsla(216, 20%, 95.1%, 0.013) 91.9%,
      hsla(216, 20%, 95.1%, 0) 100%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: -3rem;
  left: 0;
  transition: opacity 1s var(--ease);
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}

.topbar.with-bg::before {
  opacity: 1;
}

.topbar.hidden:not(.open) {
  opacity: 0;
  transform: translateY(-3rem) scale(1.01);
}

.logo {
  display: block;
  height: 3.2rem;
}

.cta {
  display: flex;
  align-items: center;
}

@media (max-width: 959px) {
  .nav {
    transition: opacity 0.6s var(--ease), transform 1s var(--ease), visibility 0.6s var(--ease);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-2rem) scaleY(0.75);
    transform-origin: top right;
    position: fixed;
    top: 8rem;
    left: var(--space-xs);
    right: var(--space-xs);
    display: grid;
    max-height: 80vh;
    overflow-y: auto;
    border-radius: var(--radius);
    background-color: var(--color-light1);
    box-shadow: var(--shadow);
  }

  .open .nav {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .cta {
    justify-content: center;
    padding: var(--space-xxs) var(--space-s);
  }
}

@media (min-width: 640px) {
  .topbar {
    padding: var(--space-s);
  }
}

@media (min-width: 960px) {
  .topbar {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .logo {
    height: 3.5rem;
  }

  .topbar> :first-child {
    justify-self: self-start;
  }

  .burger {
    display: none;
  }

  .nav {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .cta {
    justify-content: flex-end;
  }
}
</style>