import { ref, onMounted, onUnmounted } from 'vue'

export const useScroll = () => {
  const scrollY = ref(0)
  const isScrollDown = ref(false)

  const handleScroll = () => {
    if (window.scrollY > 0 && window.scrollY > scrollY.value) {
      isScrollDown.value = true
    } else {
      isScrollDown.value = false
    }
    scrollY.value = window.scrollY
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { scrollY, isScrollDown }
}
