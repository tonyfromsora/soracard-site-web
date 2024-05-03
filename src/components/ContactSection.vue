<script setup lang="ts">
const { title } = defineProps<{ title: string }>()
const { recaptchaSiteKey } = useRuntimeConfig().public

useHead({
  script: [{
    key: 'recaptcha',
    src: `https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`,
    async: true,
    defer: true,
  }]
})

type StateType = 'initial' | 'pending' | 'success' | 'error'
const buttonText: { [state in StateType]: string } = {
  initial: 'Send Message',
  pending: 'Sending...',
  success: 'Done',
  error: 'Try Again'
}

const data = ref({ name: '', email: '', message: '' })
const state = ref<StateType>('initial')
const disabled = computed(() => state.value === 'pending' || state.value === 'success')
const stateMessage = ref("We don't spam")

const handleSubmit = async () => {
  state.value = 'pending'

  let token, result

  try {
    token = await window.grecaptcha.execute(recaptchaSiteKey, { action: 'submit' })
  } catch (error) {
    console.log(error)

    state.value = 'error'
    stateMessage.value = 'reCAPTCHA error. Please try again.'
    return
  }

  try {
    result = await $fetch('/api/contact', {
      method: 'POST',
      body: { ...data.value, token }
    })
  } catch (error) {
    console.log(error)

    state.value = 'error'
    stateMessage.value = 'Server error. Please try again later.'
    return
  }

  if (result.error) {
    state.value = 'error'
    stateMessage.value = result.statusMessage
    return
  }

  state.value = 'success'
  stateMessage.value = result.statusMessage
}
</script>

<template>
  <section class="w narrow text-center pb-3xl" data-aos="fade-up">
    <h2 class="text-xl text-center mb-l">{{ title }}</h2>
    <form method="post" action="/api/contact" class="form mx-auto" @submit.prevent="handleSubmit">
      <input type="text" name="name" id="name" placeholder="Your name" class="p-xs text-s" required :disabled="disabled"
        v-model="data.name">
      <input type="email" name="email" id="email" placeholder="Your email" class="p-xs text-s" required
        :disabled="disabled" v-model="data.email">
      <textarea name="message" id="message" rows="4" placeholder="Message" class="p-xs text-s" required
        :disabled="disabled" v-model="data.message"></textarea>
      <Button type="submit" class="text-s" :disabled="disabled" :title="buttonText[state]"
        style="place-self: center;" />
      <div class="text-s mb-m">{{ stateMessage }}</div>
    </form>
    <hr>
    <p class="pt-m mx-auto text-s">
      We request that you refrain from sharing any private or sensitive information with us or others, especially your
      private keys (seed phrase). It is important to keep in mind that in a decentralized system, you are solely
      responsible for the security and protection of your assets. Therefore, we strongly advise you to take the
      necessary precautions to safeguard your information and assets from potential threats or unauthorized access.
      Remember, never share your private keys with anyone.
    </p>
    <p class="pt-s mx-auto text-s dark2">This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy" class="hover-underline accent" target="_blank">Privacy Policy</a>
      and
      <a href="https://policies.google.com/terms" class="hover-underline accent" target="_blank">Terms of Service</a>
      apply.
    </p>
  </section>
</template>

<style scoped>
.container {
  max-width: 110rem;
  text-align: center;
}

.narrow {
  max-width: 90rem;
}

.form {
  display: grid;
  gap: var(--space-s);
}

.form input,
.form textarea {
  background-color: var(--color-light1);
  border: none;
  border-radius: var(--radius);
  outline: 1px solid var(--color-semi-dark);
  outline-offset: 0;
  transition: outline-color 0.3s ease;
}

.form textarea {
  resize: vertical;
  min-height: 10em;
}

.form input:focus,
.form textarea:focus {
  outline-color: var(--color-dark1);
}

@media (hover: hover) {

  .form input:hover:not(:focus, :disabled),
  .form textarea:hover:not(:focus, :disabled) {
    outline-color: var(--color-semi-black);
  }
}
</style>