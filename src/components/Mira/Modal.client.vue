<script setup lang="ts">
import en from '~/lib/lang/en/mira.json'
import es from '~/lib/lang/es/mira.json'
import { type Link, type QAFeedItem } from '~/lib/constants/types'

const { tm, t } = useI18n({
  messages: { en, es }
})

const { miraRecaptchaSiteKey } = useRuntimeConfig().public
const { miraBaseUrl } = useRuntimeConfig().public

const LOCALSTORAGE_ITEM_NAME = 'mira-chat-history'

useHead({
  script: [{
    key: 'recaptcha',
    src: `https://www.google.com/recaptcha/api.js?render=${miraRecaptchaSiteKey}`,
    async: true,
    defer: true,
  }]
})

const isMiraModalOpen = useMiraModalState()

const question = ref('')
const feed = ref<QAFeedItem[]>([])
const processing = ref(false)

const handleSubmit = async () => {
  const q = question.value
  const ts = Date.now()

  question.value = ''
  processing.value = true
  feed.value.unshift({ question: q.split('\n').filter(el => el), ts })

  let token

  try {
    token = await window.grecaptcha.execute(miraRecaptchaSiteKey, { action: 'submit' })
  } catch (error) {
    console.log(error)
    feed.value[0].answer = [t('error.reCAPTCHA')]
    processing.value = false
    return
  }

  try {
    const result = await fetch(`${miraBaseUrl}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: q, token })
    })

    const { message, links } = await result.json()

    feed.value[0].answer = [message] || [t('error.canNotAnswer')]
    feed.value[0].links = links
  } catch (error) {
    console.log(error)
    feed.value[0].answer = [t('error.server')]
  }

  try {
    localStorage.setItem(LOCALSTORAGE_ITEM_NAME, JSON.stringify(feed.value.slice(0, 30)))
  } catch (e) {
    console.log("Can't write Mira chat histroy to localStorage")
  }

  processing.value = false
}

onMounted(() => {
  try {
    const lsFeed = localStorage.getItem(LOCALSTORAGE_ITEM_NAME)
    if (lsFeed) feed.value = JSON.parse(lsFeed)
  } catch (e) {
    console.log("Can't read Mira chat histroy from localStorage")
  }
})
</script>

<template>
  <Overlay :open="isMiraModalOpen" @click="isMiraModalOpen = false" data-cursor-show data-cursor-text="Close"
    :z-index="23" :opacity=".3" />
  <section class="mira-modal text-s p-xs" :class="{ open: isMiraModalOpen }">
    <div class="feed rounded">
      <template v-for="item in feed" :key="item.ts">
        <MiraMessage fromMira data-aos="fade-up" data-aos-delay="300">
          <MiraMDC v-for="(p, i) in item.answer" :value="p" :class="{ 'mt-xxs': i }" />
          <MiraAnswerControls v-if="item.answer?.length" v-bind="item" />
        </MiraMessage>
        <MiraMessage data-aos="fade-up" class="pb-s">
          <div class="mira rich">
            <p v-for="p in item.question">
              {{ p }}
            </p>
          </div>
        </MiraMessage>
      </template>
      <MiraExampleQuestions v-if="!feed.length" @question="(value) => { question = value; handleSubmit() }"
        :questions="tm('exampleQuestions')" />
      <MiraMessage fromMira class="pb-s">
        <div class="mira rich">
          <p v-for="p in (tm('greeting') as (string | (string | Link)[])[])">
            <template v-if="typeof p === 'string'">
              {{ p }}
            </template>
            <template v-else v-for="piece in p">
              <template v-if="typeof piece === 'string'">{{ piece }}</template>
              <template v-else>
                <a :href="piece.href" target="_blank">{{ piece.title }}</a>
              </template>
            </template>
          </p>
        </div>
      </MiraMessage>
    </div>
    <MiraTextField v-bind="tm('textField')" v-model="question" @submit="handleSubmit" :disabled="processing"
      class="bg-light1 rounded px-s py-xxs" />
  </section>
</template>

<style scoped>
.mira-modal {
  position: fixed;
  bottom: 0;
  right: 50%;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 2px;
  z-index: 24;
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1) translateX(45%);
  transition: transform 1s var(--ease), opacity 1s var(--ease), visibility 1s var(--ease);
  width: 100%;
  max-width: 60rem;
  max-height: 80vh;
}

.mira-modal.open {
  opacity: var(--opacity);
  visibility: visible;
  transform: scale(1) translateX(50%);
}

.feed {
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
}
</style>

<style>
.mira.rich p:not(:first-child):not([class]),
.mira.rich ul:not([class]),
.mira.rich ol:not([class]) {
  margin-top: 0.8em;
}

.mira.rich p:not(:last-child):not([class]),
.mira.rich ul:not([class]),
.mira.rich ol:not([class]) {
  margin-bottom: 0.8em;
}
</style>