<script setup lang="ts">
import en from '~/lib/lang/en/miraReport.json'
import es from '~/lib/lang/es/miraReport.json'

const { tm, t } = useI18n({
  messages: { en, es }
})
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
    message.value = t('reCAPTCHAError')
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
    if (result.success) message.value = t('successMessage')
    else message.value = result.message
    state.value = result.success ? 'success' : 'error'
  } catch (error) {
    console.log(error)
    message.value = t('defaultError')
    state.value = 'error'
  }
}
</script>

<template>
  <MiraTextField v-bind="tm('textField')" @submit="handleSubmit" v-model="report"
    :disabled="state === 'processing' || state === 'success'" class="py-xxs" />

  <div v-if="state === 'success' || state === 'error'" class="center py-xxs">{{ message }}</div>
</template>

<style scoped>
.center {
  text-align: center;
}
</style>