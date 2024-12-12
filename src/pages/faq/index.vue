<template>
  <h1 class="text-3xl w text-center pt-3xl pb-xl" data-aos="fade-up">This page will redirect automatically in {{ timeLeft }}s</h1>
</template>

<script setup>
const timeLeft = ref(1);

onMounted(() => {
setInterval(async () => {
  if (timeLeft.value === 1) {
    await navigateTo("/#faq", {
      external: false,
    });
  }

  timeLeft.value = timeLeft.value - 1;
}, 1000);
});
</script>
