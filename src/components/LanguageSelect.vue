<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <div class="lang ml-s rounded bg-light1">
    <span class="label" :data-label="capitalizeFirstLetter(locales.find(l => l.code === locale)?.code || '') + ' ▾'" />
    <select aria-label="Language" @change="(e) => {
      // @ts-ignore
      router.push(switchLocalePath(e.currentTarget?.value))
    }">
      <option v-for="l in locales" :value="l.code" :selected="l.code === locale">{{ l.name }}</option>
    </select>
  </div>
</template>

<style scoped>
.lang {
  align-self: center;
  justify-self: center;
  position: relative;
  overflow: hidden;
}

.lang select {
  background: none;
  border: none;
  color: currentColor;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  padding: 0.2em 1.2em 0.2em 0.6em;
  width: 3.2em;
  opacity: 0;
}

.lang>span {
  overflow: hidden;
  color: transparent;
  position: absolute;
  top: 0.2em;
  right: 1.2em;
  bottom: 0.2em;
  left: 0.6em;
  width: 100%;
  display: block;
  z-index: 2;
  pointer-events: none;
}

.lang>span::before,
.lang>span::after {
  content: attr(data-label);
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 1s var(--ease);
}

.lang>span::before {
  color: var(--color-dark1);
}

.lang>span::after {
  color: var(--color-light1);
  transform: translateY(100%) scaleY(0.5);
}

.lang::before {
  content: '';
  top: -5%;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  background-color: var(--color-dark1);
  border-radius: 50%;
  transform: translateY(106%);
  transition: transform 1s var(--ease), border-radius 1s var(--ease), background-color 1s var(--ease);
}

@media (hover:hover) {
  .lang:hover {
    transform: translateY(0) scale(1.02);
    transition: transform .6s cubic-bezier(.3, 6, .6, 1);
  }

  .lang:hover::before {
    transform: translateY(0);
    border-radius: 0;
  }

  .lang:hover>span::before {
    transform: translateY(-100%) scaleY(0.5);
  }

  .lang:hover>span::after {
    transform: translateY(0);
  }
}
</style>