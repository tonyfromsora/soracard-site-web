<script setup lang="ts">
const { question, answer } = defineProps<{ question: string[], answer: string[] }>()

const { miraBaseUrl } = useRuntimeConfig().public
const { miraRecaptchaSiteKey } = useRuntimeConfig().public

const report = ref('')
const state = ref<'initial' | 'processing' | 'success' | 'error'>('initial')
const message = ref('')

const handleSubmit = async () => {
  state.value = 'processing'
  let token

  try {
    token = await window.grecaptcha.execute(miraRecaptchaSiteKey, { action: 'submit' })
  } catch (error) {
    console.log(error)
    message.value = 'reCAPTCHA error. Please try again.'
    state.value = 'error'
    return
  }

  try {
    const response = await fetch(`${miraBaseUrl}/wrong`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question: question.join('\n'),
        answer: answer.join('\n'),
        report: report.value,
        token
      })
    })

    const result = await response.json()
    if (result.success) message.value = 'Submitted. Thank you for sharing'
    else message.value = result.message
    state.value = result.success ? 'success' : 'error'
  } catch (error) {
    console.log(error)
    message.value = 'Sometging went wrong. Please try again later'
    state.value = 'error'
  }
}
</script>

<template>
  <MiraTextField placeholder="Please share why this answer is wrong?" @submit="handleSubmit" button="Submit"
    v-model="report" :disabled="state === 'processing' || state === 'success'" class="py-xxs" />

  <div v-if="state === 'success' || state === 'error'" class="center py-xxs">{{ message }}</div>
</template>

<style scoped>
.center {
  text-align: center;
}
</style>